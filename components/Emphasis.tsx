import { splitEmphasis } from "@/lib/i18n";

// Content marks a word with *…*. The redesign no longer colours a single word
// in the headline; the markers are stripped so the copy reads as one line.
export default function Emphasis({ text }: { text: string }) {
  return <>{splitEmphasis(text).map((p) => p.text).join("")}</>;
}
