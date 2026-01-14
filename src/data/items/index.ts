import { ItemData } from '../types';

// Core sigils (required for main quest)
export const SIGILS: Record<string, ItemData> = {
  'spectral-transit-pass': {
    id: 'spectral-transit-pass',
    name: 'Spectral Transit Pass',
    description: 'Authorization to travel the Patchwork Skyrail network. Granted by the Concierge Drone after successful persona alignment.',
    category: 'pass',
    narrativeWeight: 'Represents your acceptance into the Gasket Sprawl\'s bureaucratic culture. Without it, you\'re just another unauthorized dream-fragment.',
  },
  'dropdown-prism-sigil': {
    id: 'dropdown-prism-sigil',
    name: 'Dropdown Prism Sigil',
    description: 'A crystallized harmony from the Dropdown Basilica choir. Vibrates with archived lullabies.',
    category: 'sigil',
    narrativeWeight: 'Proof that you freed the sacred songs Mnem imprisoned. Each vibration is a child\'s right to be soothed back to sleep.',
  },
  'checkbox-choir-glyph': {
    id: 'checkbox-choir-glyph',
    name: 'Checkbox Choir Glyph',
    description: 'A living botanical symbol from the Checkbox Arboretum caretakers. Pulses with balanced hope and fear.',
    category: 'sigil',
    narrativeWeight: 'Represents your understanding that dreams require both wonder and warning. Mnem tried to eliminate fear; you learned to harmonize it.',
  },
  'button-mason-seal': {
    id: 'button-mason-seal',
    name: 'Button Mason Seal',
    description: 'The union\'s mark of trust. Grants access to sabotage protocols and worker solidarity networks.',
    category: 'sigil',
    narrativeWeight: 'The workers\' autonomy matters. This seal proves you respect that they are craftspeople, not tools. Their help is freely given, not extracted.',
  },
};

// Empathy items (optional, improve endings)
export const EMPATHY_ITEMS: Record<string, ItemData> = {
  'tea-master-blessing': {
    id: 'tea-master-blessing',
    name: 'Tea Master\'s Blessing',
    description: 'Qori\'s handwritten note: "Mnem was afraid. Fear doesn\'t excuse harm, but understanding it is the first step toward repair."',
    category: 'empathy',
    narrativeWeight: 'Unlocks dialogue where Mnem admits his original protective oath. With this, you can help him see how far he strayed from it.',
  },
  'union-signed-contract': {
    id: 'union-signed-contract',
    name: 'Union-Signed Solidarity Contract',
    description: 'A formal agreement co-signed by every button-worker. They pledge to help rebuild dream infrastructure—on their own terms.',
    category: 'empathy',
    narrativeWeight: 'Shows Mnem that collective agency doesn\'t mean chaos. Worker autonomy strengthens systems, not weakens them.',
  },
  'basilica-codex': {
    id: 'basilica-codex',
    name: 'Basilica Codex',
    description: 'The overclocked choir verses revealing names of children whose memories Mnem "protected" by erasing them.',
    category: 'empathy',
    narrativeWeight: 'Irrefutable evidence of the harm Mnem\'s consolidation caused. Each erased name is a child who lost part of themselves.',
  },
  'restored-garden-blessing': {
    id: 'restored-garden-blessing',
    name: 'Restored Garden Blessing',
    description: 'The caretakers\' gratitude, manifested as a thriving dream-seed. Proof that repair is possible.',
    category: 'empathy',
    narrativeWeight: 'You didn\'t just criticize Mnem\'s methods—you demonstrated better ones. This seed shows him what care looks like.',
  },
};

// Side quest tokens and fragments
export const TOKENS: Record<string, ItemData> = {
  'ghost-process-intel': {
    id: 'ghost-process-intel',
    name: 'Ghost Process Intelligence',
    description: 'Decoded logs from leaked dream-processes. Reveals locations of Mnem\'s splinter cells.',
    category: 'token',
    narrativeWeight: 'Optional tactical advantage. Prevents lobby lockdown and exposes Mnem\'s surveillance network.',
  },
  'choir-token-1': {
    id: 'choir-token-1',
    name: 'Choir Token: Comfort Verse',
    description: 'Found in the Packet Tea Shop. Unlocks comfort-themed overclock verse.',
    category: 'token',
    narrativeWeight: 'Part of the basilica overclock sequence. Each token represents a child\'s testimony.',
  },
  'choir-token-2': {
    id: 'choir-token-2',
    name: 'Choir Token: Protection Verse',
    description: 'Earned from the Button Assembly mediation. Unlocks protection-themed overclock verse.',
    category: 'token',
    narrativeWeight: 'Workers preserve memory of their protective purpose. This token is their contribution to the choir.',
  },
  'choir-token-3': {
    id: 'choir-token-3',
    name: 'Choir Token: Hope Verse',
    description: 'Rescued from the Cloud Archive Ferries. Unlocks hope-themed overclock verse.',
    category: 'token',
    narrativeWeight: 'Refugee dreams carry hope forward. This token is their voice in the basilica.',
  },
  'debris-codex-fragment': {
    id: 'debris-codex-fragment',
    name: 'Debris Codex Fragment',
    description: 'Reconstructed memory: "I wanted to be an astronaut. Mnem said it was statistically unlikely and archived it as \'inefficient aspiration.\'"',
    category: 'fragment',
    narrativeWeight: 'Pure lore. No mechanical benefit. Just witness to what was stolen.',
  },
  'courier-credentials': {
    id: 'courier-credentials',
    name: 'Spark Atlas Courier Credentials',
    description: 'Authorization to run smuggling missions for the resistance. Boosts reputation with grassroots networks.',
    category: 'token',
    narrativeWeight: 'You\'re not just an outsider on a mission. You\'re trusted by the people who resist quietly.',
  },
  'ferry-captains-mark': {
    id: 'ferry-captains-mark',
    name: 'Ferry Captain\'s Mark',
    description: 'Awarded for successfully ferrying dream-refugees to safety. Expands action log capacity.',
    category: 'token',
    narrativeWeight: 'Every refugee saved is a dream preserved. Your log grows because their stories matter.',
  },
};

// Combined item database
export const ITEMS: Record<string, ItemData> = {
  ...SIGILS,
  ...EMPATHY_ITEMS,
  ...TOKENS,
};

// Item categories for inventory organization
export const ITEM_CATEGORIES = {
  sigils: Object.keys(SIGILS),
  empathy: Object.keys(EMPATHY_ITEMS),
  tokens: Object.keys(TOKENS),
};
