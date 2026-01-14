import { SceneData } from '../types';

export const buttonAssembly: SceneData = {
  id: 'button-assembly',
  title: 'Button Assembly Yards',
  description: 'Vast industrial floors where button-union workers craft the tactile interface elements that children press in their dreams. The foreman\'s avatar regards you with cautious solidarity.',
  flavorText: [
    'Every "Skip Nightmare" button, every "Call for Help" panic switch, every "Try Again" retry prompt—they\'re all assembled here by sentient protocols who take their craft seriously.',
    'The union went on strike when Mnem demanded they build "Accept Consolidation" buttons with no opt-out. They\'ve been locked out ever since.',
    'The foreman speaks: "You want our help sabotaging the moon-vault transport engines? Prove you respect worker autonomy first."'
  ],
  systemNote: 'Union reputation meter tracks mediation efforts. Optional gigs raise meter and unlock advanced seals or sabotage options.',
  puzzleId: 'button-labyrinth-negotiation',
  requiredItems: ['spectral-transit-pass'],
  unlocksItems: ['button-mason-seal'],
  nextScenes: ['patchwork-skyrail', 'mnemonic-vault'],
  themeOverride: {
    palette: 'industrial-solidarity',
    mood: 'labor-tension'
  }
};

export const buttonAssemblyMediation: SceneData = {
  id: 'button-assembly-mediation',
  title: 'Union Dispute Resolution',
  description: 'The button union has internal conflicts: some want full autonomy, others fear Mnem will shut them down entirely if they resist too hard. You can help mediate.',
  flavorText: [
    'Dispute #1: Should they build "Mandatory Dream Reporting" buttons? The hardliners say no. The pragmatists fear retaliation.',
    'Dispute #2: A batch of "Emergency Parent Call" buttons was labeled "deprecated." Workers want to restore them.',
    'Dispute #3: Lost schematics for the original "Imagination Amplifier" buttons have been found. Some fear they\'re too dangerous.'
  ],
  systemNote: 'Optional. Resolve 3 union disputes. Rewards: advanced button seals + sabotage options for vault infiltration.',
  requiredItems: ['button-mason-seal'],
  unlocksItems: ['union-signed-contract'],
  themeOverride: {
    palette: 'mediation-chamber',
    mood: 'deliberate-fairness'
  }
};
