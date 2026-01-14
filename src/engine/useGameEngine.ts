import { useMemo, useReducer } from 'react';
import {
  ACTION_LIBRARY,
  ALL_ENDINGS,
  ENDINGS,
  ITEMS,
  MAIN_QUEST_SCENES,
  OPTIONAL_SCENES,
  PUZZLES,
  SCENES,
  STARTING_SCENE,
  determineEnding,
} from '../data';
import { ActionLogEntry } from '../data/types';

export type PuzzleStatus = 'idle' | 'success' | 'failure';

export interface PuzzleProgress {
  status: PuzzleStatus;
  attempts: number;
  lastFailure?: string;
}

export interface GameState {
  sceneId: string;
  inventory: string[];
  unlockedScenes: string[];
  completedPuzzles: string[];
  flags: Record<string, boolean>;
  actionLog: ActionLogEntry[];
  puzzleProgress: Record<string, PuzzleProgress>;
  endingChoice?: keyof typeof ENDINGS;
}

const now = () => Date.now();

const createLogEntry = (partial: Omit<ActionLogEntry, 'id' | 'timestamp'>): ActionLogEntry => ({
  id: `${partial.type}-${now()}-${Math.random().toString(16).slice(2, 8)}`,
  timestamp: now(),
  ...partial,
});

const initialState: GameState = {
  sceneId: STARTING_SCENE,
  inventory: [],
  unlockedScenes: mergeUnique(
    [STARTING_SCENE],
    SCENES[STARTING_SCENE]?.nextScenes ?? []
  ),
  completedPuzzles: [],
  flags: {},
  actionLog: [
    createLogEntry({
      type: 'story',
      text: 'Signal acquired. Patch Kid Parr steps into the Intake Reef.',
      importance: 'major',
    }),
  ],
  puzzleProgress: {},
};

type GameAction =
  | { type: 'NAVIGATE_SCENE'; sceneId: string }
  | { type: 'COMPLETE_PUZZLE'; puzzleId: string; sceneId: string }
  | { type: 'FAIL_PUZZLE'; puzzleId: string; message?: string }
  | { type: 'CHOOSE_ENDING'; endingId: keyof typeof ENDINGS }
  | { type: 'ADD_LOG'; entry: ActionLogEntry }
  | { type: 'UNLOCK_SCENES'; sceneIds: string[] };

const mergeUnique = (base: string[], additions: string[]) => {
  const set = new Set(base);
  additions.forEach(item => set.add(item));
  return Array.from(set);
};

const reducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'NAVIGATE_SCENE': {
      const scene = SCENES[action.sceneId];
      if (!scene) {
        return state;
      }
      const hubUnlocks =
        action.sceneId === 'patchwork-skyrail'
          ? [...MAIN_QUEST_SCENES, ...OPTIONAL_SCENES]
          : [];
      const unlockedScenes = mergeUnique(state.unlockedScenes, [
        ...(scene.nextScenes ?? []),
        ...hubUnlocks,
      ]);
      return {
        ...state,
        sceneId: action.sceneId,
        unlockedScenes,
        actionLog: [
          createLogEntry({
            type: 'story',
            text: `Entered ${scene.title}.`,
            importance: 'minor',
          }),
          ...state.actionLog,
        ],
      };
    }
    case 'COMPLETE_PUZZLE': {
      const scene = SCENES[action.sceneId];
      const puzzle = PUZZLES[action.puzzleId];
      if (!scene || !puzzle) {
        return state;
      }
      const unlockedScenes = mergeUnique(state.unlockedScenes, scene.nextScenes ?? []);
      const newlyUnlockedItems = (scene.unlocksItems ?? []).filter(
        itemId => !state.inventory.includes(itemId)
      );
      const inventory = mergeUnique(state.inventory, newlyUnlockedItems);
      return {
        ...state,
        inventory,
        unlockedScenes,
        completedPuzzles: mergeUnique(state.completedPuzzles, [action.puzzleId]),
        flags: {
          ...state.flags,
          [`puzzle:${action.puzzleId}`]: true,
        },
        puzzleProgress: {
          ...state.puzzleProgress,
          [action.puzzleId]: {
            status: 'success',
            attempts: (state.puzzleProgress[action.puzzleId]?.attempts ?? 0) + 1,
          },
        },
        actionLog: [
          createLogEntry({
            type: 'puzzle',
            text: puzzle.successText,
            importance: 'major',
          }),
          ...state.actionLog,
        ],
      };
    }
    case 'FAIL_PUZZLE': {
      const attempts = (state.puzzleProgress[action.puzzleId]?.attempts ?? 0) + 1;
      return {
        ...state,
        puzzleProgress: {
          ...state.puzzleProgress,
          [action.puzzleId]: {
            status: 'failure',
            attempts,
            lastFailure: action.message,
          },
        },
        actionLog: [
          createLogEntry({
            type: 'puzzle',
            text: action.message ?? 'Puzzle attempt failed.',
            importance: 'minor',
          }),
          ...state.actionLog,
        ],
      };
    }
    case 'CHOOSE_ENDING': {
      return {
        ...state,
        endingChoice: action.endingId,
        actionLog: [
          createLogEntry({
            type: 'story',
            text: `Ending decision locked: ${ENDINGS[action.endingId].name}.`,
            importance: 'major',
          }),
          ...state.actionLog,
        ],
      };
    }
    case 'ADD_LOG': {
      return {
        ...state,
        actionLog: [action.entry, ...state.actionLog],
      };
    }
    case 'UNLOCK_SCENES': {
      return {
        ...state,
        unlockedScenes: mergeUnique(state.unlockedScenes, action.sceneIds),
      };
    }
    default:
      return state;
  }
};

export const canAccessScene = (sceneId: string, inventory: string[]) => {
  const scene = SCENES[sceneId];
  if (!scene) {
    return false;
  }
  return (scene.requiredItems ?? []).every(item => inventory.includes(item));
};

export function useGameEngine() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const currentScene = SCENES[state.sceneId];
  const currentPuzzle = currentScene?.puzzleId ? PUZZLES[currentScene.puzzleId] : undefined;
  const inventoryItems = state.inventory.map(id => ITEMS[id]).filter(Boolean);

  const availableScenes = useMemo(() => {
    return state.unlockedScenes
      .map(sceneId => SCENES[sceneId])
      .filter(Boolean)
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [state.unlockedScenes]);

  const inventorySummary = inventoryItems.map(item => item.name);
  const endingStatus = determineEnding(state.inventory);
  const lockedEnding = state.endingChoice ? ENDINGS[state.endingChoice] : undefined;
  const endingVariants = Object.values(ALL_ENDINGS);

  const navigateToScene = (sceneId: string) => {
    if (!canAccessScene(sceneId, state.inventory)) {
      dispatch({
        type: 'ADD_LOG',
        entry: createLogEntry({
          type: 'system',
          text: `Access denied. Missing required items for ${SCENES[sceneId].title}.`,
          importance: 'minor',
        }),
      });
      return;
    }
    dispatch({ type: 'NAVIGATE_SCENE', sceneId });
  };

  const completePuzzle = (puzzleId: string) => {
    dispatch({ type: 'COMPLETE_PUZZLE', puzzleId, sceneId: state.sceneId });
  };

  const failPuzzle = (puzzleId: string, message?: string) => {
    dispatch({ type: 'FAIL_PUZZLE', puzzleId, message });
  };

  const chooseEnding = (endingId: keyof typeof ENDINGS) => {
    dispatch({ type: 'CHOOSE_ENDING', endingId });
  };

  const unlockSceneTargets = (sceneIds: string[]) => {
    dispatch({ type: 'UNLOCK_SCENES', sceneIds });
  };

  return {
    state,
    currentScene,
    currentPuzzle,
    availableScenes,
    inventoryItems,
    inventorySummary,
    endingStatus,
    lockedEnding,
    endingVariants,
    actionLibrary: ACTION_LIBRARY,
    navigateToScene,
    completePuzzle,
    failPuzzle,
    chooseEnding,
    unlockSceneTargets,
  };
}
