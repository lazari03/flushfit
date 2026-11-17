export default function TopBar({ lines }: { lines: string[] }) {
  return (
    <div className="topbar">
      <div className="topbar__inner">
        {lines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>
    </div>
  );
}
