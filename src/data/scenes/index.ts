// Scene data exports
import { SceneData } from '../types';
import { intakeReef, intakeReefGhostProcesses } from './intake-reef';
import { dropdownBasilica, dropdownBasilicaOverclock } from './dropdown-basilica';
import { checkboxArboretum, checkboxArboretumRestoration } from './checkbox-arboretum';
import { buttonAssembly, buttonAssemblyMediation } from './button-assembly';
import { patchworkSkyrail, patchworkSkyrailEvents } from './patchwork-skyrail';
import { packetTeaShop } from './packet-tea-shop';
import { debrisChorus, sparkAtlasDepot, cloudArchiveFerries } from './micro-scenes';
import { mnemonicVault, mnemonicVaultDialogue } from './mnemonic-vault';

export const SCENES: Record<string, SceneData> = {
  // Act I - Orientation
  'intake-reef': intakeReef,
  'intake-reef-ghost': intakeReefGhostProcesses,
  'patchwork-skyrail': patchworkSkyrail,
  'patchwork-skyrail-events': patchworkSkyrailEvents,

  // Act II - Disruption (Major Districts)
  'dropdown-basilica': dropdownBasilica,
  'dropdown-basilica-overclock': dropdownBasilicaOverclock,
  'checkbox-arboretum': checkboxArboretum,
  'checkbox-arboretum-restoration': checkboxArboretumRestoration,
  'button-assembly': buttonAssembly,
  'button-assembly-mediation': buttonAssemblyMediation,

  // Act III - Reckoning (Micro-scenes)
  'packet-tea-shop': packetTeaShop,
  'debris-chorus': debrisChorus,
  'spark-atlas-depot': sparkAtlasDepot,
  'cloud-archive-ferries': cloudArchiveFerries,

  // Act IV - Vault Decision
  'mnemonic-vault': mnemonicVault,
  'mnemonic-vault-dialogue': mnemonicVaultDialogue,
};

// Story progression helpers
export const STARTING_SCENE = 'intake-reef';

export const MAIN_QUEST_SCENES = [
  'intake-reef',
  'dropdown-basilica',
  'checkbox-arboretum',
  'button-assembly',
  'mnemonic-vault',
];

export const OPTIONAL_SCENES = [
  'intake-reef-ghost',
  'dropdown-basilica-overclock',
  'checkbox-arboretum-restoration',
  'button-assembly-mediation',
  'packet-tea-shop',
  'debris-chorus',
  'spark-atlas-depot',
  'cloud-archive-ferries',
  'patchwork-skyrail-events',
];
