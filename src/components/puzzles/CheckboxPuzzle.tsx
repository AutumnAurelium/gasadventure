import { useMemo, useState } from 'react';
import { PuzzleComponentProps } from './types';

interface CheckboxItem {
  id: string;
  label: string;
  required: boolean;
}

interface CheckboxGroup {
  category: string;
  checkboxes: CheckboxItem[];
}

interface ConflictRule {
  check: (selected: string[]) => boolean;
  failMessage: string;
}

interface CheckboxConfig {
  checkboxGroups: CheckboxGroup[];
  conflictRules: ConflictRule[];
  successCriteria: {
    requireAll: string[];
    noConflicts: boolean;
  };
  flavorTextOnFailure?: string[];
}

export function CheckboxPuzzle({ puzzle, status, onComplete, onFail }: PuzzleComponentProps) {
  const config = puzzle.config as CheckboxConfig;
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    setSelected(prev => (prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]));
  };

  const conflicts = useMemo(() => {
    return config.conflictRules.filter(rule => rule.check(selected));
  }, [config.conflictRules, selected]);

  const handleSubmit = () => {
    const missingRequired = config.successCriteria.requireAll.filter(id => !selected.includes(id));
    if (missingRequired.length > 0) {
      onFail(config.flavorTextOnFailure?.[0] ?? puzzle.failureText);
      return;
    }

    if (config.successCriteria.noConflicts && conflicts.length > 0) {
      onFail(conflicts[0].failMessage);
      return;
    }

    onComplete();
  };

  return (
    <div className="puzzle puzzle--checkbox">
      <p className="puzzle__instructions">{puzzle.instructions}</p>
      <div className="puzzle__grid">
        {config.checkboxGroups.map(group => (
          <div key={group.category} className="checkbox-group">
            <h4>{group.category}</h4>
            {group.checkboxes.map(box => (
              <label key={box.id} className="checkbox-item">
                <input
                  type="checkbox"
                  className="checkbox-item__box"
                  checked={selected.includes(box.id)}
                  onChange={() => toggle(box.id)}
                />
                <span>{box.label}</span>
                {box.required ? <em>Required</em> : <small>Optional</small>}
              </label>
            ))}
          </div>
        ))}
      </div>
      {conflicts.length > 0 ? (
        <div className="puzzle__warning">{conflicts[0].failMessage}</div>
      ) : null}
      <div className="puzzle__actions">
        <button type="button" className="button button--primary" onClick={handleSubmit}>
          Harmonize Garden
        </button>
        <span className={`puzzle__status puzzle__status--${status}`}>
          {status === 'success' ? 'Harmony stabilized.' : status === 'failure' ? 'Harmony unstable.' : 'Awaiting selection.'}
        </span>
      </div>
    </div>
  );
}
