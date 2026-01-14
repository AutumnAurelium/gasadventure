import { EndingData } from '../types';

// Three main endings based on player choice at the vault
export const ENDINGS: Record<string, EndingData> = {
  // RESTORE: Return the moon to its original protective function
  restore: {
    id: 'restore',
    name: 'Restore the Guardian',
    requiredItems: ['dropdown-prism-sigil', 'checkbox-choir-glyph', 'button-mason-seal'],
    epilogueText: [
      'You reverse Mnem\'s consolidation protocols. The Mnemonic Moon\'s light surges, warm and protective once more.',
      'Archived lullabies flood back into circulation. The choir sings freely. Dream-gardens bloom.',
      'Mnem steps down from the vault console. "I failed them," he says. "You showed me how."',
      'The Concierge Drone broadcasts system-wide: "Guardian functions restored. All districts may resume autonomous operation."',
      'Patch Kid Parr returns home, exhausted but proud. For the first time, you don\'t feel overshadowed by Pajama Sam. You found your own way to protect the children.',
    ],
    consequencesSummary: 'The status quo is restored, but better. Mnem\'s authoritarian impulses are checked by reinstated worker autonomy and transparent oversight.',
  },

  'restore-with-empathy': {
    id: 'restore-with-empathy',
    name: 'Restore the Guardian (Redemptive)',
    requiredItems: [
      'dropdown-prism-sigil',
      'checkbox-choir-glyph',
      'button-mason-seal',
      'tea-master-blessing',
      'union-signed-contract',
      'basilica-codex',
      'restored-garden-blessing',
    ],
    epilogueText: [
      'You reverse Mnem\'s consolidation—but this time, he helps you.',
      'With trembling hands, Mnem dismantles the infrastructure he built to "protect" children by controlling them. The Tea Master\'s blessing steadies his resolve. The union contract reminds him what solidarity looks like. The basilica codex forces him to face every name he erased. The garden blessing shows him repair is possible.',
      '"I thought I was their guardian," Mnem says. "I was their warden."',
      'The moon\'s light returns—but this time, Mnem stays on as an advisor, not a ruler. The Concierge Drone monitors him. The workers hold veto power. The caretakers set the boundaries.',
      'Parr narrates: "Pajama Sam never had to forgive his villain. Maybe that\'s what made this harder. But also... realer."',
      'You return home knowing: protecting children doesn\'t mean controlling their dreams. It means giving them tools to face their nightmares—and the hope that morning will come.',
    ],
    consequencesSummary: 'Mnem is redeemed through accountability, not punishment. The system is restored with him as a reformed participant, not an exiled villain.',
  },

  // REMIX: Restructure the moon with collective governance
  remix: {
    id: 'remix',
    name: 'Remix the System',
    requiredItems: ['dropdown-prism-sigil', 'checkbox-choir-glyph', 'button-mason-seal'],
    epilogueText: [
      'You don\'t restore the old system. You build something new.',
      'The moon\'s governance is distributed: the choir elects conductors, the caretakers set garden policy, the button union controls interface design. No single entity—not Mnem, not you, not anyone—can consolidate power again.',
      'Mnem is assigned a role: archivist of mistakes. His job is to document where his consolidation went wrong, so future generations can learn.',
      'The Concierge Drone becomes the Transparency Node, broadcasting all policy changes in real-time. No more backroom rewrites.',
      'Parr thinks: "Sam\'s world had a hero. This one has a committee. And somehow... that feels right."',
      'Children\'s dreams are wilder now. Riskier. But also freer. The Mnemonic Moon doesn\'t eliminate nightmares—it gives kids the courage to wake up from them.',
    ],
    consequencesSummary: 'Systemic reform. Collective governance replaces both Mnem\'s authoritarianism and the old guardian model. Messier, but more democratic.',
  },

  'remix-with-empathy': {
    id: 'remix-with-empathy',
    name: 'Remix the System (Restorative)',
    requiredItems: [
      'dropdown-prism-sigil',
      'checkbox-choir-glyph',
      'button-mason-seal',
      'tea-master-blessing',
      'union-signed-contract',
    ],
    epilogueText: [
      'You remix the system—and Mnem helps design the safeguards that will prevent anyone like him from seizing control again.',
      'The irony isn\'t lost on anyone. The architect of consolidation now builds the tools for decentralization.',
      'The choir votes on lullaby archives. The garden council sets dream-health standards. The button union controls interface ethics. And Mnem? He writes the constitutional limits on executive power.',
      'The Tea Master smiles: "He\'s not forgiven. But he\'s useful. Sometimes that\'s enough."',
      'The union contract becomes the template: all Sprawl workers get veto power over policies that affect their domains.',
      'Parr reflects: "Sam defeated the darkness. I learned to work with it. Not sure which is braver."',
    ],
    consequencesSummary: 'Mnem\'s expertise is channeled into preventing future Mnems. Restorative justice meets systemic change.',
  },

  // LIBERATE: Dismantle the moon\'s control infrastructure entirely
  liberate: {
    id: 'liberate',
    name: 'Liberate the Dreams',
    requiredItems: ['dropdown-prism-sigil', 'checkbox-choir-glyph', 'button-mason-seal'],
    epilogueText: [
      'You shut down the vault. All of it.',
      'No more Mnemonic Moon governance. No more centralized dream management. The Gasket Sprawl infrastructure goes dark.',
      'Mnem stares at the blank screens. "You\'ll doom them. Without coordination, nightmares will—"',
      '"Will be their own to face," you interrupt. "You tried to protect them from fear. You just made them afraid of themselves."',
      'The workers, caretakers, and choir members scatter to their own districts. They\'ll coordinate locally, organically, without top-down architecture.',
      'The Concierge Drone powers down, its last message: "Bureaucracy dissolved. Trust your neighbors."',
      'Parr isn\'t sure this was the right choice. But it was the brave one.',
      'Children\'s dreams become chaotic. Some nightmares go unchecked. But also: imaginations flourish in ways the old system never allowed.',
      'In the wreckage of the vault, a new kind of dream stirs—one the Mnemonic Moon never archived: radical hope.',
    ],
    consequencesSummary: 'Anarchistic liberation. The infrastructure is dismantled. Uncertainty replaces control. Freedom replaces safety.',
  },

  'liberate-with-empathy': {
    id: 'liberate-with-empathy',
    name: 'Liberate the Dreams (Tender Dissolution)',
    requiredItems: [
      'dropdown-prism-sigil',
      'checkbox-choir-glyph',
      'button-mason-seal',
      'tea-master-blessing',
      'restored-garden-blessing',
    ],
    epilogueText: [
      'You shut down the vault—but you do it gently.',
      'Before the systems go dark, you archive the lullabies with the choir. You transplant the garden\'s seeds to distributed caretaker nodes. You ensure the button workers have the schematics to rebuild locally.',
      'Mnem watches you dismantle his life\'s work with care. "You\'re liberating them... but you\'re not abandoning them."',
      '"No," you say. "I learned that from the Tea Master. And from the garden. Freedom doesn\'t mean isolation."',
      'The moon\'s light fades, but it doesn\'t die. It scatters into a million small lights—each district, each worker, each caretaker glowing with their own autonomous care.',
      'The Concierge Drone\'s final broadcast: "Centralized guardianship ended. Distributed care begins. Trust each other."',
      'Parr returns home and writes in their journal: "Sam had a flashlight. I learned to trust the dark—because I gave everyone their own candle."',
    ],
    consequencesSummary: 'Dissolution with care. The system is dismantled, but not destroyed. Localized networks replace central authority.',
  },
};

// Ending selection logic
export function determineEnding(collectedItems: string[]): string {
  const hasAllSigils =
    collectedItems.includes('dropdown-prism-sigil') &&
    collectedItems.includes('checkbox-choir-glyph') &&
    collectedItems.includes('button-mason-seal');

  if (!hasAllSigils) {
    return 'insufficient-sigils'; // Fail state
  }

  const empathyCount = [
    'tea-master-blessing',
    'union-signed-contract',
    'basilica-codex',
    'restored-garden-blessing',
  ].filter(item => collectedItems.includes(item)).length;

  // Player chooses ending at vault, but empathy items unlock enhanced versions
  // This is a helper function - actual choice is player-driven
  return empathyCount >= 3 ? 'empathy-enhanced' : 'standard';
}

// Failure ending
export const FAILURE_ENDING: EndingData = {
  id: 'insufficient-sigils',
  name: 'Incomplete Infiltration',
  requiredItems: [],
  epilogueText: [
    'You reach the vault, but you don\'t have all three sigils. The interface rejects your access.',
    'Mnem\'s systems detect the intrusion. Lockdown protocols activate.',
    'The Mnemonic Moon dims further. More children forget their bedtime stories.',
    'Parr escapes, but the mission fails. The Gasket Sprawl remains under Mnem\'s control.',
    '"I wasn\'t ready," you whisper. "Sam would have been ready."',
    'Maybe next time. Maybe.',
  ],
  consequencesSummary: 'Failure. Mnem\'s consolidation continues. The moon keeps dying.',
};

export const ALL_ENDINGS = {
  ...ENDINGS,
  'insufficient-sigils': FAILURE_ENDING,
};
