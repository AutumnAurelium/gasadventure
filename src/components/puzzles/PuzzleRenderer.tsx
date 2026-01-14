import { PuzzleData } from '../../data/types';
import { PuzzleProgress } from '../../engine';
import { ButtonLabyrinthPuzzle } from './ButtonLabyrinthPuzzle';
import { CheckboxPuzzle } from './CheckboxPuzzle';
import { DropdownPuzzle } from './DropdownPuzzle';

interface PuzzleRendererProps {
  puzzle: PuzzleData;
  progress?: PuzzleProgress;
  onComplete: () => void;
  onFail: (message?: string) => void;
}

export function PuzzleRenderer({ puzzle, progress, onComplete, onFail }: PuzzleRendererProps) {
  const status = progress?.status ?? 'idle';

  switch (puzzle.type) {
    case 'dropdown':
      return <DropdownPuzzle puzzle={puzzle} status={status} onComplete={onComplete} onFail={onFail} />;
    case 'checkbox':
      return <CheckboxPuzzle puzzle={puzzle} status={status} onComplete={onComplete} onFail={onFail} />;
    case 'button':
      return <ButtonLabyrinthPuzzle puzzle={puzzle} status={status} onComplete={onComplete} onFail={onFail} />;
    default:
      return (
        <div className="puzzle puzzle--placeholder">
          <p className="puzzle__instructions">{puzzle.instructions}</p>
          <p className="puzzle__warning">This puzzle type is staged but not yet interactive.</p>
          <button type="button" className="button button--primary" onClick={onComplete}>
            Mark Complete
          </button>
        </div>
      );
  }
}
