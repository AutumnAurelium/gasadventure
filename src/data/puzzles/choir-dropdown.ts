import { PuzzleData } from '../types';

// Cascading dropdown choir harmonization puzzle from Dropdown Basilica
export const choirDropdownPuzzle: PuzzleData = {
  id: 'choir-dropdown-harmony',
  type: 'dropdown',
  title: 'Cascading Choir Harmonization',
  instructions: 'The dropdown choir sings in nested layers. Align each tier\'s harmony to unlock the archived lullabies and free the Dropdown Prism Sigil.',
  successText: 'The choir\'s voices surge in perfect harmony. Archived lullabies flood the chamber—soft, protective, full of love. The Dropdown Prism Sigil materializes in your hand, humming with restored purpose.',
  failureText: 'Dissonance ripples through the choir. The conductor avatar shakes its head sadly. "The harmonics must cascade in proper sequence. Listen carefully to each layer\'s relationship."',
  hints: [
    'Each dropdown tier builds on the previous layer\'s choice.',
    'Lullabies follow a pattern: comfort → protection → hope.',
    'The first tier sets the emotional foundation.',
  ],
  config: {
    tiers: [
      {
        question: 'Foundation Layer: Emotional Base',
        options: [
          { value: 'fear', label: 'Fear Suppression Protocol', correct: false },
          { value: 'comfort', label: 'Comfort Resonance', correct: true },
          { value: 'control', label: 'Behavioral Control Matrix', correct: false },
          { value: 'distraction', label: 'Distraction Harmonics', correct: false },
        ],
      },
      {
        question: 'Middle Layer: Protective Function',
        dependsOn: 'comfort', // Only valid if comfort was selected
        options: [
          { value: 'barrier', label: 'Emotional Barrier Construction', correct: false },
          { value: 'presence', label: 'Guardian Presence Simulation', correct: true },
          { value: 'numbness', label: 'Sensation Dampening', correct: false },
          { value: 'redirection', label: 'Threat Redirection', correct: false },
        ],
      },
      {
        question: 'Top Layer: Hope Anchoring',
        dependsOn: 'presence',
        options: [
          { value: 'promise', label: 'Abstract Promise (morning will come)', correct: true },
          { value: 'guarantee', label: 'Concrete Guarantee (nothing bad will happen)', correct: false },
          { value: 'denial', label: 'Denial Protocol (monsters don\'t exist)', correct: false },
          { value: 'deferral', label: 'Temporal Deferral (deal with it later)', correct: false },
        ],
      },
      {
        question: 'Resolution: Lullaby Cadence',
        dependsOn: 'promise',
        options: [
          { value: 'command', label: 'Command ("You WILL sleep")', correct: false },
          { value: 'invitation', label: 'Gentle Invitation ("Rest now, safely")', correct: true },
          { value: 'demand', label: 'Urgent Demand ("Sleep immediately")', correct: false },
          { value: 'negotiation', label: 'Bargain ("Sleep and tomorrow will be better")', correct: false },
        ],
      },
    ],
    requireAllCorrect: true,
    cascadeFailure: true, // Wrong choice collapses subsequent tiers
    flavorTextOnFailure: [
      'The conductor whispers: "Lullabies are promises we make to frightened children. False promises create nightmares."',
    ],
  },
};
