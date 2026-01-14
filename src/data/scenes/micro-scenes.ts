import { SceneData } from '../types';

export const debrisChorus: SceneData = {
  id: 'debris-chorus',
  title: 'Debris Chorus',
  description: 'Fragments of deleted dream-code sing dissonant harmonies. A checkbox puzzle lets you reconstruct lost memories—if you can bear to witness what Mnem erased.',
  flavorText: [
    'Each checkbox represents a child\'s deleted hope: "I can be an astronaut." "My parents will stay together." "Monsters aren\'t real."',
    'Reconstructing them won\'t bring them back. But it will show you exactly what Mnem stole.',
    'The Chorus sings: "We are the forgotten dreams. The ones deemed too dangerous. Too inefficient. Too... human."'
  ],
  systemNote: 'Pure lore dump. No mechanical reward except understanding Mnem\'s full cruelty.',
  requiredItems: ['spectral-transit-pass'],
  unlocksItems: ['debris-codex-fragment'],
  themeOverride: {
    palette: 'memorial-gray',
    mood: 'mournful-witness'
  }
};

export const sparkAtlasDepot: SceneData = {
  id: 'spark-atlas-depot',
  title: 'Spark Atlas Depot',
  description: 'A courier hub where radio-button dispatchers route urgent messages between resistance cells. Each mission you complete reveals hidden caches of archived child-memories.',
  flavorText: [
    'Dispatcher: "We\'re smuggling out memory-fragments before Mnem can compress them into his so-called \'optimized archive.\'"',
    '"Every cache we save is a kid who gets to remember their grandmother\'s bedtime stories."',
    'The missions are simple but urgent: dodge Mnem\'s audit drones, plant decoy packets, extract high-value dreams before they\'re sanitized.'
  ],
  systemNote: 'Radio-button courier missions. Each completion saves a memory cache and boosts reputation.',
  requiredItems: ['spectral-transit-pass'],
  unlocksItems: ['courier-credentials'],
  themeOverride: {
    palette: 'urgent-logistics',
    mood: 'tactical-compassion'
  }
};

export const cloudArchiveFerries: SceneData = {
  id: 'cloud-archive-ferries',
  title: 'Cloud Archive Ferries',
  description: 'Time-pressured menu puzzle where you ferry dream-refugees away from Mnem\'s consolidation protocols. Success expands your action log capacity and earns grassroots respect.',
  flavorText: [
    'Refugee dreams cluster at the dock: a child\'s imaginary friend, a recurring flying-dream, a protective nightmare that warned of real danger.',
    '"They\'re scheduled for deletion," the ferry captain says. "Mnem calls them redundant. We call them irreplaceable."',
    'Each ferry run is a race against Mnem\'s audit clock. Save as many as you can.'
  ],
  systemNote: 'Timed menu puzzle. Success boosts action log capacity + reputation with refugees.',
  requiredItems: ['spectral-transit-pass'],
  unlocksItems: ['ferry-captains-mark'],
  themeOverride: {
    palette: 'race-against-time',
    mood: 'desperate-rescue'
  }
};
