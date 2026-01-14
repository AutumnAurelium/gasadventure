import { SceneAction } from './types';

export const ACTION_LIBRARY: Record<string, SceneAction> = {
  'ending-restore': {
    id: 'ending-restore',
    label: 'Restore the Guardian',
    type: 'ending',
    description: 'Return the moon to its original protective function.',
  },
  'ending-remix': {
    id: 'ending-remix',
    label: 'Remix the System',
    type: 'ending',
    description: 'Distribute governance across councils and unions.',
  },
  'ending-liberate': {
    id: 'ending-liberate',
    label: 'Liberate the Dreams',
    type: 'ending',
    description: 'Dismantle centralized control entirely.',
  },
};
