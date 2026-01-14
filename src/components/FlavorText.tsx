interface FlavorTextProps {
  lines: string[];
}

export function FlavorText({ lines }: FlavorTextProps) {
  return (
    <div className="flavor">
      <h2>Ambient Feed</h2>
      <ul>
        {lines.map(line => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </div>
  );
}
