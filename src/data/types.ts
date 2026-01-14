// Core data types for GasAdventure narrative content

export interface SceneData {
  id: string;
  title: string;
  description: string;
  flavorText: string[];
  systemNote?: string; // The "wrinkle" from CONCEPT.md
  puzzleId?: string;
  requiredItems?: string[];
  unlocksItems?: string[];
  nextScenes?: string[];
  actions?: SceneAction[];
  themeOverride?: {
    palette?: string;
    mood?: string;
  };
}

export interface SceneAction {
  id: string;
  label: string;
  type: 'navigate' | 'puzzle' | 'ending' | 'inspect';
  description?: string;
  targetSceneId?: string;
  requiredItems?: string[];
  grantsItems?: string[];
  setsFlags?: string[];
}

export interface PuzzleData {
  id: string;
  type: 'dropdown' | 'checkbox' | 'button' | 'slider' | 'radio';
  title: string;
  instructions: string;
  successText: string;
  failureText: string;
  hints?: string[];
  // Puzzle-specific config will be in separate files
  config: unknown;
}

export interface ThemeTokens {
  id: string;
  name: string;
  mood: string;
  palette: {
    background: string;
    surface: string;
    surfaceAlt: string;
    text: string;
    textMuted: string;
    accent: string;
    accentSoft: string;
    border: string;
  };
  gradient: string;
}

export interface ItemData {
  id: string;
  name: string;
  description: string;
  category: 'sigil' | 'empathy' | 'pass' | 'token' | 'fragment';
  narrativeWeight: string; // Explains why this matters to the plot
}

export interface EndingData {
  id: string;
  name: string;
  requiredItems: string[];
  requiredFlags?: string[];
  epilogueText: string[];
  consequencesSummary: string;
}

export interface ActionLogEntry {
  id: string;
  timestamp: number;
  type: 'story' | 'system' | 'lore' | 'puzzle';
  text: string;
  importance: 'critical' | 'major' | 'minor';
}
