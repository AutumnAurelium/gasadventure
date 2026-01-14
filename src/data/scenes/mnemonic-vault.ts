import { SceneData } from '../types';

export const mnemonicVault: SceneData = {
  id: 'mnemonic-vault',
  title: 'Mnemonic Moon Vault',
  description: 'The reactor core where Minister Mnem siphons dream-energy to power his "protective consolidation." The interface awaits your sigils—and your judgment.',
  flavorText: [
    'The Mnemonic Moon hangs above the reactor, its light dim and stuttering. Children across the world are losing their ability to dream.',
    'Mnem stands at the console. He doesn\'t fight you. He just looks tired.',
    '"You don\'t understand," he says. "Uncontrolled dreams become nightmares. Nightmares become trauma. I was trying to protect them."',
    '"But you\'ve gathered the sigils. You\'ve spoken to the workers, the caretakers, the refugees. You tell me: what happens to the moon?"'
  ],
  systemNote: 'Final confrontation. Player chooses ending based on gathered sigils + empathy items.',
  puzzleId: 'vault-final-choice',
  requiredItems: ['dropdown-prism-sigil', 'checkbox-choir-glyph', 'button-mason-seal'],
  nextScenes: [], // Leads to endings
  themeOverride: {
    palette: 'vault-confrontation',
    mood: 'choice-gravity'
  }
};

export const mnemonicVaultDialogue: SceneData = {
  id: 'mnemonic-vault-dialogue',
  title: 'Confronting Minister Mnem',
  description: 'Mnem\'s dialogue tree adapts based on which optional artifacts you\'ve collected. He can be reasoned with—if you\'ve gathered enough evidence of the harm his consolidation caused.',
  flavorText: [
    'With Tea Master\'s Blessing: Mnem remembers his oath. His voice cracks. "I wanted to be their guardian..."',
    'With Union Contract: "The workers turned on me. But I gave them purpose. Didn\'t I?"',
    'With Basilica Codex: "The lullabies... I archived them for safety. They were never supposed to fall silent."',
    'With Restored Garden: "You... you saved the dream-flora. I thought they were beyond saving."',
    'With all artifacts: Mnem breaks. "I failed them. Show me how to undo this."'
  ],
  systemNote: 'Optional artifacts modify Mnem\'s dialogue and unlock redemption ending.',
  requiredItems: ['dropdown-prism-sigil', 'checkbox-choir-glyph', 'button-mason-seal'],
  themeOverride: {
    palette: 'emotional-reckoning',
    mood: 'empathy-test'
  }
};
