import { SceneData } from '../types';

export const checkboxArboretum: SceneData = {
  id: 'checkbox-arboretum',
  title: 'Checkbox Arboretum',
  description: 'A digital greenhouse where caretaker spirits tend to binary flora. Each plant represents a type of dream: hopes, fears, wishes, warnings. Under Mnem\'s regime, many have withered to gray checkboxes.',
  flavorText: [
    'The head caretaker\'s avatar flickers weakly. "Without proper harmonization, the garden dies. And when the garden dies, children stop dreaming new things."',
    'You see checkbox clusters labeled: "Birthday Wishes," "Monster-Under-Bed Protocols," "Flying Dreams," "Talking-to-Animals Subroutines."',
    'Many are already grayed out. Mnem classified them as "inefficient emotional overhead."'
  ],
  systemNote: 'Plants decay when ignored. Side quests restore health, affecting hints, buffs, and vault shortcuts.',
  puzzleId: 'checkbox-botanical-harmony',
  requiredItems: ['spectral-transit-pass'],
  unlocksItems: ['checkbox-choir-glyph'],
  nextScenes: ['patchwork-skyrail', 'button-assembly'],
  themeOverride: {
    palette: 'botanical-digital',
    mood: 'gentle-decay'
  }
};

export const checkboxArboretumRestoration: SceneData = {
  id: 'checkbox-arboretum-restoration',
  title: 'Garden Restoration Protocols',
  description: 'The caretakers need help reviving the most delicate dream-flora. Each restoration requires careful attention to the balance between hope and fear.',
  flavorText: [
    'A "Nightlight Comfort" plant struggles to bloom. One child stopped believing in its protection.',
    'The "Superhero Transformation" vine has gone dormant. Too many kids told it wasn\'t "realistic."',
    'Restoring them won\'t just help your mission. It might save the ability to imagine impossible things.'
  ],
  systemNote: 'Optional. Complete 3 restoration puzzles. Rewards: portable buffs + extra hints + potential vault shortcut.',
  requiredItems: ['checkbox-choir-glyph'],
  unlocksItems: ['restored-garden-blessing'],
  themeOverride: {
    palette: 'restoration-spring',
    mood: 'careful-hope'
  }
};
