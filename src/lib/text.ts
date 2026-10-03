// Soft hyphens (U+00AD) at German compound boundaries, so long words in big uppercase
// headings can break on phones. Use for display text only, never for <title>/meta.
const BREAKS: [string, string][] = [
  ["Wimpernverlängerung", "Wimpern­verlängerung"],
  ["Babyboomer", "Baby­boomer"],
  ["Acrylnägel", "Acryl­nägel"],
];

export function soft(text: string) {
  return BREAKS.reduce((t, [word, broken]) => t.split(word).join(broken), text);
}
