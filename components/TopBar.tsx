export default function TopBar({ lines }: { lines: string[] }) {
  return (
    <div className="topbar">
      {lines.map((line) => (
        <span key={line}>{line}</span>
      ))}
    </div>
  );
}
