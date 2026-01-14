import { PuzzleData } from '../types';

// Three-tier dropdown persona alignment puzzle from Intake Reef
export const personaAlignmentPuzzle: PuzzleData = {
  id: 'persona-alignment',
  type: 'dropdown',
  title: 'Persona Alignment Protocol',
  instructions: 'The Concierge Drone requires proof that you understand the Gasket Sprawl\'s cultural norms. Select the correct responses to demonstrate respect for local customs.',
  successText: 'The drone\'s optical sensors glow green. "Compliance nebula achieved. Spectral Transit Pass authorized. Welcome to the Sprawl, Patch Kid."',
  failureText: 'The drone\'s sensors flicker red. "Misalignment detected. Recalibrate your persona matrix and try again."',
  hints: [
    'The Sprawl values process over outcome.',
    'Show respect for the workers who maintain the dream infrastructure.',
    'Remember: you\'re here to help, not to judge.',
  ],
  config: {
    tiers: [
      {
        question: 'Primary Intention',
        options: [
          { value: 'destroy', label: 'Destroy Mnem\'s tyranny', correct: false },
          { value: 'restore', label: 'Restore the moon\'s protective function', correct: true },
          { value: 'escape', label: 'Escape with my own dreams intact', correct: false },
          { value: 'observe', label: 'Observe and document violations', correct: false },
        ],
      },
      {
        question: 'Stance on Bureaucracy',
        options: [
          { value: 'obstacle', label: 'An obstacle to overcome', correct: false },
          { value: 'necessary', label: 'A necessary framework for order', correct: true },
          { value: 'joke', label: 'A cosmic joke to be mocked', correct: false },
          { value: 'weapon', label: 'A weapon Mnem weaponized', correct: false },
        ],
      },
      {
        question: 'Worker Solidarity Commitment',
        options: [
          { value: 'tools', label: 'Workers are tools for my mission', correct: false },
          { value: 'allies', label: 'Workers are allies with their own agency', correct: true },
          { value: 'victims', label: 'Workers are victims needing rescue', correct: false },
          { value: 'irrelevant', label: 'Workers are irrelevant to the core mission', correct: false },
        ],
      },
    ],
    requireAllCorrect: true,
    flavorTextOnFailure: [
      'The drone\'s tone remains professional but firm: "Your alignment suggests you view this infrastructure as disposable. We are not."',
    ],
  },
};
