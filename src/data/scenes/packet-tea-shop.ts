import { SceneData } from '../types';

export const packetTeaShop: SceneData = {
  id: 'packet-tea-shop',
  title: 'Packet Tea Shop',
  description: 'Tea Master Qori\'s establishment smells of dream-infused leaves and compassion. Sliders adjust brew strength, steeping time, and memory resonance. The right blend unlocks buried truths.',
  flavorText: [
    'Qori speaks softly: "Minister Mnem used to come here, before. He was afraid, you know. Afraid of what children might dream if left uncontrolled."',
    '"He showed me his original oath—to protect the boundary between nightmare and imagination. Somewhere, that oath broke."',
    'The tea menu offers: Clarity Blend (hints for current puzzle), Memory Steep (lore fragments), Empathy Infusion (reveals NPC histories).'
  ],
  systemNote: 'Trade acts of kindness for hints and lore. Reveals Mnem\'s original protective oath and his fear-based motives.',
  requiredItems: ['spectral-transit-pass'],
  unlocksItems: ['tea-master-blessing'],
  themeOverride: {
    palette: 'warm-sanctuary',
    mood: 'contemplative-refuge'
  }
};
