import { useMemo, useState } from 'react';
import { PuzzleComponentProps } from './types';

interface DropdownOption {
  value: string;
  label: string;
  correct: boolean;
}

interface DropdownTier {
  question: string;
  options: DropdownOption[];
  dependsOn?: string;
}

interface DropdownConfig {
  tiers: DropdownTier[];
  requireAllCorrect: boolean;
  cascadeFailure?: boolean;
  flavorTextOnFailure?: string[];
}

const emptySelection = (tiers: DropdownTier[]) =>
  Object.fromEntries(tiers.map((_, index) => [String(index), '']));

export function DropdownPuzzle({ puzzle, status, onComplete, onFail }: PuzzleComponentProps) {
  const config = puzzle.config as DropdownConfig;
  const [selections, setSelections] = useState<Record<string, string>>(
    emptySelection(config.tiers)
  );

  const cascadeCutoff = useMemo(() => {
    if (!config.cascadeFailure) {
      return config.tiers.length;
    }
    let cutoff = config.tiers.length;
    config.tiers.some((tier, index) => {
      const selected = selections[String(index)];
      const selectedOption = tier.options.find(option => option.value === selected);
      if (selected && selectedOption && !selectedOption.correct) {
        cutoff = index + 1;
        return true;
      }
      return false;
    });
    return cutoff;
  }, [config.cascadeFailure, config.tiers, selections]);

  const tierAvailability = (tier: DropdownTier, index: number) => {
    if (index >= cascadeCutoff) {
      return false;
    }
    if (!tier.dependsOn) {
      return true;
    }
    return Object.values(selections).includes(tier.dependsOn);
  };

  const handleSubmit = () => {
    const isComplete = config.tiers.every((tier, index) => {
      const selected = selections[String(index)];
      const option = tier.options.find(item => item.value === selected);
      return Boolean(option && option.correct);
    });

    if (isComplete) {
      onComplete();
      return;
    }

    const fallback = config.flavorTextOnFailure?.[0] ?? puzzle.failureText;
    onFail(fallback);
  };

  return (
    <div className="puzzle puzzle--dropdown">
      <p className="puzzle__instructions">{puzzle.instructions}</p>
      <div className="puzzle__grid">
        {config.tiers.map((tier, index) => {
          const available = tierAvailability(tier, index);
          const requirement = tier.dependsOn ? `Requires selection: ${tier.dependsOn}` : undefined;
          return (
            <label key={tier.question} className={`puzzle__field ${available ? '' : 'is-disabled'}`}>
              <span>{tier.question}</span>
              <select
                className="puzzle__select"
                value={selections[String(index)]}
                onChange={event =>
                  setSelections(prev => ({ ...prev, [String(index)]: event.target.value }))
                }
                disabled={!available}
              >
                <option value="">Choose a response</option>
                {tier.options.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {requirement && !available ? (
                <small className="puzzle__requirement">{requirement}</small>
              ) : null}
            </label>
          );
        })}
      </div>
      <div className="puzzle__actions">
        <button type="button" className="button button--primary" onClick={handleSubmit}>
          Submit Alignment
        </button>
        <span className={`puzzle__status puzzle__status--${status}`}>
          {status === 'success' ? 'Alignment locked.' : status === 'failure' ? 'Recalibration required.' : 'Awaiting input.'}
        </span>
      </div>
    </div>
  );
}
