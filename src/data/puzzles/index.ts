// Puzzle data exports
import { PuzzleData } from '../types';
import { personaAlignmentPuzzle } from './persona-alignment';
import { choirDropdownPuzzle } from './choir-dropdown';
import { checkboxHarmonyPuzzle } from './checkbox-harmony';
import { buttonLabyrinthPuzzle } from './button-labyrinth';

export const PUZZLES: Record<string, PuzzleData> = {
  'persona-alignment': personaAlignmentPuzzle,
  'choir-dropdown-harmony': choirDropdownPuzzle,
  'checkbox-botanical-harmony': checkboxHarmonyPuzzle,
  'button-labyrinth-negotiation': buttonLabyrinthPuzzle,
};

// Puzzle difficulty progression
export const PUZZLE_PROGRESSION = [
  'persona-alignment', // Tutorial-level: teaches respect for process
  'choir-dropdown-harmony', // Intermediate: cascading dependencies
  'checkbox-botanical-harmony', // Advanced: conflict resolution
  'button-labyrinth-negotiation', // Expert: branching narrative + morality test
];
