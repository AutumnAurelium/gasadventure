import { SceneData } from '../types';

export const dropdownBasilica: SceneData = {
  id: 'dropdown-basilica',
  title: 'Dropdown Basilica',
  description: 'A cathedral of cascading menus stretches upward into infinity. Each dropdown choir sings archived lullabies in nested harmony, their voices locked in Mnem\'s compression protocols.',
  flavorText: [
    'The choir conductor stands frozen mid-gesture, awaiting proper dropdown alignment to resume the sacred performance.',
    'Before Mnem\'s takeover, these lullabies soothed millions of children into peaceful sleep. Now they\'re archival data.',
    'You hear fragments of half-remembered songs: twinkle-melodies, hush-rhythms, the soft promise that someone will watch over you.'
  ],
  systemNote: 'Overclocking the choir unlocks bonus verses, but requires choir tokens hidden in other districts. Incentivizes revisiting areas.',
  puzzleId: 'choir-dropdown-harmony',
  requiredItems: ['spectral-transit-pass'],
  unlocksItems: ['dropdown-prism-sigil'],
  nextScenes: ['patchwork-skyrail', 'checkbox-arboretum'],
  themeOverride: {
    palette: 'liturgical-data',
    mood: 'reverent-sorrow'
  }
};

export const dropdownBasilicaOverclock: SceneData = {
  id: 'dropdown-basilica-overclock',
  title: 'Overclocked Choir Chamber',
  description: 'With choir tokens from across the Gasket Sprawl, you can push the dropdown harmonics beyond their rated limits—unlocking verses Mnem thought he\'d erased.',
  flavorText: [
    'The bonus verses contain forbidden knowledge: children\'s names, specific nightmares Mnem promised to "protect" them from.',
    'These aren\'t just lullabies. They\'re testimony.',
    'Each overclocked verse reveals another child whose memories Mnem stole "for their own good."'
  ],
  systemNote: 'Optional. Requires 3 choir tokens from side quests in other districts. Rewards: extended lore + shortcut to vault.',
  requiredItems: ['dropdown-prism-sigil', 'choir-token-1', 'choir-token-2', 'choir-token-3'],
  unlocksItems: ['basilica-codex'],
  themeOverride: {
    palette: 'overclock-dangerous',
    mood: 'forbidden-revelation'
  }
};
