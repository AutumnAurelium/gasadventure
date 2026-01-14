import { useEffect, useMemo } from 'react';
import { FlavorText } from './components/FlavorText';
import { Panel } from './components/Panel';
import { SceneHeader } from './components/SceneHeader';
import { PuzzleRenderer } from './components/puzzles/PuzzleRenderer';
import { useGameEngine } from './engine';
import { DEFAULT_THEME, THEMES } from './data';

const themeToVars = (themeId: string) => {
  const theme = THEMES[themeId] ?? DEFAULT_THEME;
  return {
    theme,
    vars: {
      '--ga-bg': theme.palette.background,
      '--ga-surface': theme.palette.surface,
      '--ga-surface-alt': theme.palette.surfaceAlt,
      '--ga-text': theme.palette.text,
      '--ga-text-muted': theme.palette.textMuted,
      '--ga-accent': theme.palette.accent,
      '--ga-accent-soft': theme.palette.accentSoft,
      '--ga-border': theme.palette.border,
      '--ga-gradient': theme.gradient,
    },
  };
};

export default function App() {
  const {
    state,
    currentScene,
    currentPuzzle,
    availableScenes,
    inventoryItems,
    endingStatus,
    lockedEnding,
    endingVariants,
    actionLibrary,
    navigateToScene,
    completePuzzle,
    failPuzzle,
    chooseEnding,
  } = useGameEngine();

  const { theme, vars } = useMemo(() => {
    const paletteId = currentScene?.themeOverride?.palette ?? 'default';
    return themeToVars(paletteId);
  }, [currentScene?.themeOverride?.palette]);

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    root.dataset.theme = theme.id;
  }, [theme.id, vars]);

  if (!currentScene) {
    return <div className="app">Scene missing.</div>;
  }

  const nextScenes = (currentScene.nextScenes ?? []).map(sceneId => {
    const scene = availableScenes.find(item => item.id === sceneId);
    return scene;
  });

  const destinations = availableScenes.filter(scene => scene.id !== currentScene.id);
  const puzzleProgress = currentScene.puzzleId ? state.puzzleProgress[currentScene.puzzleId] : undefined;
  const sceneRequires = (currentScene.requiredItems ?? []).map(id => id.replace(/-/g, ' '));
  const isVault = currentScene.id === 'mnemonic-vault';
  const canChooseEnding = endingStatus !== 'insufficient-sigils';

  return (
    <div className="app">
      <div className="app__frame">
        <div className="app__header">
          <span className="app__brand">GasAdventure :: Signal Shell</span>
          <span className="app__mood">{theme.name} · {theme.mood}</span>
        </div>
        <div className="app__layout">
          <main className="main">
            <SceneHeader scene={currentScene} />
            {sceneRequires.length > 0 ? (
              <div className="requirement">
                Requires: {sceneRequires.join(', ')}
              </div>
            ) : null}
            <FlavorText lines={currentScene.flavorText} />
            {currentPuzzle ? (
              <div className="card">
                <h2>{currentPuzzle.title}</h2>
                <PuzzleRenderer
                  puzzle={currentPuzzle}
                  progress={puzzleProgress}
                  onComplete={() => completePuzzle(currentPuzzle.id)}
                  onFail={message => failPuzzle(currentPuzzle.id, message)}
                />
              </div>
            ) : (
              <div className="card">
                <h2>Scene Actions</h2>
                <p className="muted">No primary ritual here. Use the transit board or inspect the ambient feed.</p>
              </div>
            )}
            <div className="card">
              <h2>Transit Routes</h2>
              <div className="routes">
                {(nextScenes.length > 0 ? nextScenes : destinations).map(scene => {
                  if (!scene) {
                    return null;
                  }
                  const requiredItems = scene.requiredItems ?? [];
                  const isLocked = !requiredItems.every(item => state.inventory.includes(item));
                  return (
                    <button
                      key={scene.id}
                      type="button"
                      className={`route ${isLocked ? 'route--locked' : ''}`}
                      onClick={() => navigateToScene(scene.id)}
                      disabled={isLocked}
                    >
                      <span>{scene.title}</span>
                      <small>{scene.description}</small>
                      {isLocked ? (
                        <em>Requires: {requiredItems.join(', ')}</em>
                      ) : (
                        <em>Deploy to scene</em>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </main>
          <aside className="sidebar">
            <Panel title="Inventory" tone="accent">
              {inventoryItems.length === 0 ? (
                <p className="muted">No sigils collected. The transit board is still locked.</p>
              ) : (
                <ul className="inventory">
                  {inventoryItems.map(item => (
                    <li key={item.id}>
                      <strong>{item.name}</strong>
                      <span>{item.description}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Panel>
            <Panel title="Puzzle Status">
              <ul className="puzzle-status">
                {Object.keys(state.puzzleProgress).length === 0 ? (
                  <li className="muted">No puzzles logged yet.</li>
                ) : (
                  Object.entries(state.puzzleProgress).map(([id, progress]) => (
                    <li key={id}>
                      <span>{id}</span>
                      <em>{progress.status} · attempts {progress.attempts}</em>
                    </li>
                  ))
                )}
              </ul>
            </Panel>
            <Panel title="Ending Monitor">
              <p className="muted">Status: {endingStatus}</p>
              {isVault ? (
                <div className="ending-actions">
                  {Object.values(actionLibrary).map(action => (
                    <button
                      key={action.id}
                      type="button"
                      className="button button--ghost"
                      disabled={!canChooseEnding}
                      onClick={() => {
                        if (action.id === 'ending-restore') {
                          chooseEnding('restore');
                        }
                        if (action.id === 'ending-remix') {
                          chooseEnding('remix');
                        }
                        if (action.id === 'ending-liberate') {
                          chooseEnding('liberate');
                        }
                      }}
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              ) : null}
              {isVault && !canChooseEnding ? (
                <p className="muted">Vault rejects access without all three sigils.</p>
              ) : null}
              {lockedEnding ? (
                <div className="ending-preview">
                  <h4>{lockedEnding.name}</h4>
                  <p>{lockedEnding.consequencesSummary}</p>
                </div>
              ) : (
                <div className="ending-preview">
                  <h4>Possible Outcomes</h4>
                  <ul>
                    {endingVariants.slice(0, 3).map(ending => (
                      <li key={ending.id}>{ending.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </Panel>
            <Panel title="Action Log">
              <ul className="log">
                {state.actionLog.slice(0, 6).map(entry => (
                  <li key={entry.id}>
                    <span className={`log__type log__type--${entry.type}`}>{entry.type}</span>
                    <p>{entry.text}</p>
                  </li>
                ))}
              </ul>
            </Panel>
          </aside>
        </div>
      </div>
    </div>
  );
}
