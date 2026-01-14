import { SceneData } from '../types';

export const patchworkSkyrail: SceneData = {
  id: 'patchwork-skyrail',
  title: 'Patchwork Skyrail Hub',
  description: 'The transit nexus connecting all districts of the Gasket Sprawl. Radio-button dispatchers route you to available destinations. A crackling log feed shows resistance transmissions from across the network.',
  flavorText: [
    'The transit board shows destinations grayed out until you have proper clearance. Each sigil you earn lights up new routes.',
    'Resistance cells broadcast coded messages: "Archive Ferries compromised." "Tea shop still serving." "Eclipse event imminent."',
    'This is the heart of the Sprawl\'s nervous system. Control the Skyrail, and you control the flow of dreams.',
    'Parr\'s inner voice: "Sam never had to deal with bureaucratic infrastructure. He just walked through doors."'
  ],
  systemNote: 'Travel during certain "clock ticks" triggers dynamic events—strikes, eclipses, storms—that modify puzzles or open temporary routes.',
  requiredItems: ['spectral-transit-pass'],
  nextScenes: [], // Dynamically populated based on player progress
  themeOverride: {
    palette: 'transit-nexus',
    mood: 'hub-connectivity'
  }
};

export const patchworkSkyrailEvents: SceneData = {
  id: 'patchwork-skyrail-events',
  title: 'Dynamic Transit Events',
  description: 'The Skyrail\'s temporal window system means certain events only occur during specific "clock ticks"—measured by your cumulative action count.',
  flavorText: [
    'TICK 50: Garden Strike - Caretakers refuse to process new dream-seeds. Travel to Arboretum restricted until dispute resolved.',
    'TICK 100: Data Eclipse - The Mnemonic Moon passes behind a server firewall. Rare routes temporarily accessible.',
    'TICK 150: Choir Storm - Overclocked basilica harmonics cause system-wide resonance. Bonus lore fragments scatter across all districts.',
    'Side quests can delay or accelerate clock ticks, giving you strategic control over when events trigger.'
  ],
  systemNote: 'Optional awareness. Understanding the tick system allows expert routing and event manipulation.',
  requiredItems: ['spectral-transit-pass'],
  themeOverride: {
    palette: 'temporal-disruption',
    mood: 'event-chaos'
  }
};
