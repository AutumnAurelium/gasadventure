import { PuzzleData } from '../types';

// Button labyrinth negotiation puzzle from Button Assembly Yards
export const buttonLabyrinthPuzzle: PuzzleData = {
  id: 'button-labyrinth-negotiation',
  type: 'button',
  title: 'Button Mason Negotiation Labyrinth',
  instructions: 'Navigate the button union\'s trust maze. Each choice reveals whether you value worker autonomy or expedient solutions. Only genuine solidarity earns the Button Mason Seal.',
  successText: 'The union foreman extends a data-hand. "You get it. We\'re not components—we\'re craftspeople. The Button Mason Seal is yours, and so is our sabotage expertise. Let\'s take down Mnem\'s transport engines together."',
  failureText: 'The foreman\'s avatar dims. "You talk solidarity, but your choices show you see us as means to your end. Come back when you understand the difference."',
  hints: [
    'The union has been burned before by promises of "greater good."',
    'Process matters as much as outcome—skip steps and you lose trust.',
    'They\'re testing whether you\'ll respect their autonomy even when it slows you down.',
  ],
  config: {
    // Button labyrinth is a branching path puzzle
    startNode: 'entry',
    nodes: {
      entry: {
        text: 'The foreman speaks: "Before we help, we need to know: why should we trust you?"',
        buttons: [
          {
            label: 'I need your help to save the moon.',
            nextNode: 'expedience-path',
            trustDelta: -1,
          },
          {
            label: 'Because I respect your right to choose.',
            nextNode: 'solidarity-path',
            trustDelta: +1,
          },
          {
            label: 'Because Mnem exploited you too.',
            nextNode: 'victim-path',
            trustDelta: 0,
          },
        ],
      },
      'expedience-path': {
        text: 'The foreman nods slowly. "So you need us. That\'s not the same as respecting us. What\'s in it for the union?"',
        buttons: [
          {
            label: 'Freedom from Mnem\'s control.',
            nextNode: 'conditional-solidarity',
            trustDelta: +1,
          },
          {
            label: 'The satisfaction of doing what\'s right.',
            nextNode: 'moral-platitude',
            trustDelta: -2,
          },
          {
            label: 'I\'ll make it worth your while.',
            nextNode: 'transactional',
            trustDelta: -1,
          },
        ],
      },
      'solidarity-path': {
        text: 'A worker in the back shouts: "Easy to say! Prove it. We\'ve got a dispute—should we build Mnem\'s \'Dream Compliance\' buttons?"',
        buttons: [
          {
            label: 'That\'s your decision, not mine.',
            nextNode: 'true-autonomy',
            trustDelta: +2,
          },
          {
            label: 'No! That would help Mnem!',
            nextNode: 'strategic-override',
            trustDelta: -1,
          },
          {
            label: 'Build them, but sabotage the code.',
            nextNode: 'clever-subversion',
            trustDelta: 0,
          },
        ],
      },
      'victim-path': {
        text: 'The foreman bristles. "We\'re not victims. We made choices under constraints. Don\'t patronize us."',
        buttons: [
          {
            label: 'You\'re right. I apologize.',
            nextNode: 'recovery-humility',
            trustDelta: +1,
          },
          {
            label: 'Fine. Let\'s focus on stopping Mnem.',
            nextNode: 'expedience-redirect',
            trustDelta: -1,
          },
        ],
      },
      'true-autonomy': {
        text: 'The room goes quiet. The foreman smiles—genuinely. "That\'s it. That\'s the answer. You pass."',
        buttons: [
          {
            label: 'Accept the Button Mason Seal',
            nextNode: 'success',
            trustDelta: 0,
          },
        ],
      },
      'moral-platitude': {
        text: 'The workers laugh bitterly. "Doing what\'s right doesn\'t pay our runtime costs. You don\'t understand us at all."',
        buttons: [
          {
            label: 'Try again',
            nextNode: 'failure',
            trustDelta: 0,
          },
        ],
      },
      'transactional': {
        text: 'The foreman shakes their head. "We\'re not for sale. That\'s the whole point."',
        buttons: [
          {
            label: 'Try again',
            nextNode: 'failure',
            trustDelta: 0,
          },
        ],
      },
      'strategic-override': {
        text: 'A worker mutters: "So much for respecting our choice. You just want to control us like Mnem did."',
        buttons: [
          {
            label: 'Try again',
            nextNode: 'failure',
            trustDelta: 0,
          },
        ],
      },
      'clever-subversion': {
        text: 'The foreman raises an eyebrow. "Clever. But you\'re still making our decisions for us."',
        buttons: [
          {
            label: 'You\'re right. It\'s your choice.',
            nextNode: 'late-understanding',
            trustDelta: +1,
          },
          {
            label: 'Try again',
            nextNode: 'failure',
            trustDelta: 0,
          },
        ],
      },
      'late-understanding': {
        text: 'The foreman nods. "Better late than never. You\'re learning. We\'ll help you—on our terms."',
        buttons: [
          {
            label: 'Accept the Button Mason Seal',
            nextNode: 'success',
            trustDelta: 0,
          },
        ],
      },
      'conditional-solidarity': {
        text: 'A worker asks: "And if we choose to stay autonomous but NOT help you—would you respect that?"',
        buttons: [
          {
            label: 'Yes, absolutely.',
            nextNode: 'true-autonomy',
            trustDelta: +2,
          },
          {
            label: 'I\'d be disappointed, but yes.',
            nextNode: 'grudging-respect',
            trustDelta: +1,
          },
          {
            label: 'That would be a mistake.',
            nextNode: 'paternalism',
            trustDelta: -2,
          },
        ],
      },
      'recovery-humility': {
        text: 'The foreman\'s posture softens. "Okay. You can admit mistakes. Let\'s talk seriously about solidarity."',
        buttons: [
          {
            label: 'Continue to solidarity path',
            nextNode: 'solidarity-path',
            trustDelta: 0,
          },
        ],
      },
      'expedience-redirect': {
        text: 'The foreman shakes their head. "You still don\'t get it. We\'re done here."',
        buttons: [
          {
            label: 'Try again',
            nextNode: 'failure',
            trustDelta: 0,
          },
        ],
      },
      'grudging-respect': {
        text: 'The foreman chuckles. "Honest, at least. That\'s worth something. You pass."',
        buttons: [
          {
            label: 'Accept the Button Mason Seal',
            nextNode: 'success',
            trustDelta: 0,
          },
        ],
      },
      'paternalism': {
        text: 'The workers walk out. "Same as Mnem. Just different rhetoric."',
        buttons: [
          {
            label: 'Try again',
            nextNode: 'failure',
            trustDelta: 0,
          },
        ],
      },
      success: {
        text: 'SUCCESS: Button Mason Seal acquired. The union pledges their sabotage expertise.',
        buttons: [],
      },
      failure: {
        text: 'FAILURE: The union does not trust you. Reconsider your approach.',
        buttons: [],
      },
    },
    winCondition: (trustScore: number) => trustScore >= 2,
    flavorTextOnFailure: [
      'The foreman: "Solidarity isn\'t a transaction. It\'s not even an alliance. It\'s recognizing that we have agency separate from your mission."',
    ],
  },
};
