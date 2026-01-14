import { ReactNode } from 'react';

interface PanelProps {
  title: string;
  children: ReactNode;
  tone?: 'default' | 'accent';
}

export function Panel({ title, children, tone = 'default' }: PanelProps) {
  return (
    <section className={`panel panel--${tone}`}>
      <header className="panel__header">
        <h3>{title}</h3>
      </header>
      <div className="panel__body">{children}</div>
    </section>
  );
}
