import { PuzzleData } from '../types';

// Botanical checkbox harmony puzzle from Checkbox Arboretum
export const checkboxHarmonyPuzzle: PuzzleData = {
  id: 'checkbox-botanical-harmony',
  type: 'checkbox',
  title: 'Botanical Harmony Matrix',
  instructions: 'Reawaken the caretaker spirits by selecting the correct botanical harmonies. Each dream-type has natural symbiosis—some combinations nurture, others conflict.',
  successText: 'The checkbox garden blooms in radiant harmony. Caretaker spirits stir, their avatars solidifying. "You understand the balance," they say. "Hope and fear must coexist, not be segregated." The Checkbox Choir Glyph forms from pure gratitude.',
  failureText: 'The garden shudders. Conflicting harmonies cause wilting. "These dream-types cannot thrive in forced proximity," a caretaker warns. "Natural symbiosis requires wisdom."',
  hints: [
    'Flying dreams need freedom, not safety constraints.',
    'Monster-under-bed protocols protect, but over-activation causes paranoia.',
    'Wishful thinking and harsh reality can coexist if balanced.',
  ],
  config: {
    checkboxGroups: [
      {
        category: 'Hope Catalysts',
        checkboxes: [
          { id: 'flying', label: 'Flying Dreams', required: true },
          { id: 'superhero', label: 'Superhero Transformations', required: true },
          { id: 'wishes', label: 'Birthday Wish Protocols', required: true },
          { id: 'talking-animals', label: 'Animal Communication', required: false }, // Optional but beneficial
        ],
      },
      {
        category: 'Protective Boundaries',
        checkboxes: [
          { id: 'nightlight', label: 'Nightlight Comfort', required: true },
          { id: 'monster-check', label: 'Monster-Under-Bed Scans', required: true },
          { id: 'parent-call', label: 'Emergency Parent Call', required: true },
          { id: 'blanket-fortress', label: 'Blanket Fortress Shields', required: false },
        ],
      },
      {
        category: 'Reality Integration',
        checkboxes: [
          { id: 'consequences', label: 'Gentle Consequence Modeling', required: true },
          { id: 'empathy', label: 'Empathy Simulation', required: true },
          { id: 'disappointment', label: 'Disappointment Processing', required: true },
          { id: 'grief', label: 'Grief Support Protocols', required: false }, // Advanced but helpful
        ],
      },
    ],
    conflictRules: [
      {
        // Over-selecting protection + under-selecting hope = paranoia
        check: (selected: string[]) => {
          const protectionCount = selected.filter(id =>
            ['nightlight', 'monster-check', 'parent-call', 'blanket-fortress'].includes(id)
          ).length;
          const hopeCount = selected.filter(id =>
            ['flying', 'superhero', 'wishes', 'talking-animals'].includes(id)
          ).length;
          return protectionCount >= 3 && hopeCount < 2;
        },
        failMessage: 'Over-protection without hope breeds paranoia, not peace.',
      },
      {
        // Reality without hope = despair
        check: (selected: string[]) => {
          const realityCount = selected.filter(id =>
            ['consequences', 'empathy', 'disappointment', 'grief'].includes(id)
          ).length;
          const hopeCount = selected.filter(id =>
            ['flying', 'superhero', 'wishes', 'talking-animals'].includes(id)
          ).length;
          return realityCount >= 3 && hopeCount < 2;
        },
        failMessage: 'Reality without hope is despair. Children need both truth and wonder.',
      },
    ],
    successCriteria: {
      requireAll: ['flying', 'superhero', 'wishes', 'nightlight', 'monster-check', 'parent-call', 'consequences', 'empathy', 'disappointment'],
      noConflicts: true,
    },
    flavorTextOnFailure: [
      'A caretaker sighs: "Mnem made this mistake. He thought fear could be eliminated. It can only be balanced with courage."',
    ],
  },
};
