const PATHS: Record<string, string> = {
  // truck — fast shipping
  shipping:
    "M2 7h11v8H2zM13 10h4l4 3.5V15h-8zM5.5 19a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM17 19a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z",
  // shield-check — certified quality
  quality: "M12 2 4 5v6c0 5 3.4 8.5 8 9 4.6-.5 8-4 8-9V5l-8-3Zm-1.2 12.2L7.5 11l1.4-1.4 1.9 1.9 4.3-4.3L16.5 8.6l-5.7 5.6Z",
  // ribbon/badge — warranty
  warranty:
    "M12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm-3 9.5L6 20l6-3 6 3-3-8.5",
  // drawing/ruler — project drawings
  drawings: "M3 21 15 9l3-3 3 3-3 3L6 24 3 21Zm9-13 3 3M17 4l3 3",
};

export default function FeatureIcon({ name, size = 26 }: { name: string; size?: number }) {
  const d = PATHS[name];
  if (!d) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}
