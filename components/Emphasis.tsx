import { splitEmphasis } from "@/lib/i18n";

// Renders "text *emphasis* text" with the marked segment as an accent <em>.
export default function Emphasis({ text }: { text: string }) {
  return (
    <>
      {splitEmphasis(text).map((part, i) =>
        part.emphasis ? (
          <em key={i} style={{ color: "var(--accent)" }}>
            {part.text}
          </em>
        ) : (
          <span key={i}>{part.text}</span>
        )
      )}
    </>
  );
}
