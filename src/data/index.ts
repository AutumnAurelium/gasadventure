/**
 * GasAdventure Narrative Data
 *
 * Central export point for all game content (scenes, puzzles, items, endings).
 * Import from here rather than individual files for cleaner dependencies.
 */

// Type definitions
export * from './types';

// Scene data
export { SCENES, STARTING_SCENE, MAIN_QUEST_SCENES, OPTIONAL_SCENES } from './scenes';

// Puzzle configurations
export { PUZZLES, PUZZLE_PROGRESSION } from './puzzles';

// Item data
export { ITEMS, SIGILS, EMPATHY_ITEMS, TOKENS, ITEM_CATEGORIES } from './items';

// Ending data
export { ENDINGS, ALL_ENDINGS, FAILURE_ENDING, determineEnding } from './endings';

// Action data
export { ACTION_LIBRARY } from './actions';

// Theme data
export { THEMES, DEFAULT_THEME } from './themes';
