import { PuzzleData } from '../../data/types';

export interface PuzzleComponentProps {
  puzzle: PuzzleData;
  status: 'idle' | 'success' | 'failure';
  onComplete: () => void;
  onFail: (message?: string) => void;
}
