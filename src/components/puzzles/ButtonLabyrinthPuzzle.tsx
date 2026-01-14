import { useMemo, useState } from 'react';
import { PuzzleComponentProps } from './types';

interface LabyrinthButton {
  label: string;
  nextNode: string;
  trustDelta: number;
}

interface LabyrinthNode {
  text: string;
  buttons: LabyrinthButton[];
}

interface ButtonLabyrinthConfig {
  startNode: string;
  nodes: Record<string, LabyrinthNode>;
  winCondition: (trustScore: number) => boolean;
  flavorTextOnFailure?: string[];
}

export function ButtonLabyrinthPuzzle({ puzzle, status, onComplete, onFail }: PuzzleComponentProps) {
  const config = puzzle.config as ButtonLabyrinthConfig;
  const [currentNodeId, setCurrentNodeId] = useState(config.startNode);
  const [trustScore, setTrustScore] = useState(0);
  const currentNode = config.nodes[currentNodeId];

  const isTerminal = currentNode.buttons.length === 0;
  const isWin = useMemo(() => config.winCondition(trustScore), [config, trustScore]);

  const handleAdvance = (button: LabyrinthButton) => {
    const nextTrust = trustScore + button.trustDelta;
    setTrustScore(nextTrust);
    setCurrentNodeId(button.nextNode);

    if (button.nextNode === 'success' && config.winCondition(nextTrust)) {
      onComplete();
      return;
    }

    if (button.nextNode === 'failure') {
      onFail(config.flavorTextOnFailure?.[0] ?? puzzle.failureText);
    }
  };

  const reset = () => {
    setCurrentNodeId(config.startNode);
    setTrustScore(0);
  };

  return (
    <div className="puzzle puzzle--button">
      <p className="puzzle__instructions">{puzzle.instructions}</p>
      <div className="labyrinth">
        <p className="labyrinth__text">{currentNode.text}</p>
        <div className="labyrinth__controls">
          {currentNode.buttons.map(button => (
            <button
              key={button.label}
              type="button"
              className="button button--ghost"
              onClick={() => handleAdvance(button)}
            >
              {button.label}
            </button>
          ))}
        </div>
        <div className="labyrinth__meta">
          <span>Trust Score: {trustScore}</span>
          <span className={`puzzle__status puzzle__status--${status}`}>
            {status === 'success' ? 'Solidarity earned.' : status === 'failure' ? 'Trust broken.' : 'Negotiation active.'}
          </span>
        </div>
      </div>
      {isTerminal && !isWin ? (
        <div className="puzzle__warning">This path ends cold. Reset to try another route.</div>
      ) : null}
      <div className="puzzle__actions">
        <button type="button" className="button" onClick={reset}>
          Reset Negotiation
        </button>
      </div>
    </div>
  );
}
