import { SceneData } from '../types';

export const intakeReef: SceneData = {
  id: 'intake-reef',
  title: 'Neon Lobby / Intake Reef',
  description: 'The entrance hall pulses with bureaucratic neon. A concierge drone hovers near a three-tiered persona alignment terminal, its optical sensors scanning you with professional skepticism.',
  flavorText: [
    'The Intake Reef processes thousands of dream fragments per night. Tonight, the queue is empty except for you.',
    'Through the viewport, you can see the Mnemonic Moon hanging dimmer than usual, its surface flickering like a failing screen.',
    'Memory fragments drift past like digital snow—children forgetting their favorite bedtime stories, one pixel at a time.'
  ],
  systemNote: 'A failing firewall leaks "ghost process" errands. Completing them grants intel about Mnem\'s splinter cells and prevents lobby lockdown.',
  puzzleId: 'persona-alignment',
  unlocksItems: ['spectral-transit-pass'],
  nextScenes: ['patchwork-skyrail'],
  themeOverride: {
    palette: 'neon-bureaucratic',
    mood: 'tense-arrival'
  }
};

export const intakeReefGhostProcesses: SceneData = {
  id: 'intake-reef-ghost',
  title: 'Ghost Process Containment',
  description: 'Errant subroutines leak through cracked firewall protocols. Each one represents a child\'s fear that escaped the Mnemonic Moon\'s protective filters.',
  flavorText: [
    'A spectral code fragment whispers: "I can\'t remember my mom\'s voice anymore..."',
    'The concierge drone looks away. It knows these leaks shouldn\'t be happening.',
    'Minister Mnem\'s consolidation project has destabilized the boundary between archived dreams and active nightmares.'
  ],
  systemNote: 'Optional side quest. Collect 5 spectral codes to calm frightened processes. Rewards: intel about Mnem\'s splinter cells + prevents lobby lockdown event.',
  requiredItems: ['spectral-transit-pass'],
  unlocksItems: ['ghost-process-intel'],
  themeOverride: {
    palette: 'spectral-warning',
    mood: 'haunted-urgency'
  }
};
