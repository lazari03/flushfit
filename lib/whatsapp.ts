// International format, digits only — no "+", spaces, or leading zeros (wa.me requirement).
export const WHATSAPP_NUMBER = "355684069999";

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
