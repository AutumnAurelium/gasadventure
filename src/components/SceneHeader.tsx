import { SceneData } from '../data/types';

interface SceneHeaderProps {
  scene: SceneData;
}

export function SceneHeader({ scene }: SceneHeaderProps) {
  return (
    <header className="scene-header">
      <div>
        <p className="scene-header__eyebrow">Active Signal</p>
        <h1>{scene.title}</h1>
        <p className="scene-header__description">{scene.description}</p>
      </div>
      {scene.systemNote ? (
        <div className="scene-header__note">
          <span>System Note</span>
          <p>{scene.systemNote}</p>
        </div>
      ) : null}
    </header>
  );
}
