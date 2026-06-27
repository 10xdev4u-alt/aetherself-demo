export const themes = {
  dark: { bg: "#0a0a0a", surface: "#0d0d0d", border: "#1e1e1e", text: "#e0e0e0", muted: "#666", primary: "#0066ff" },
  light: { bg: "#ffffff", surface: "#f5f5f5", border: "#e0e0e0", text: "#111", muted: "#888", primary: "#0066ff" },
} as const;
export type Theme = keyof typeof themes;
export function getThemeCSS(theme: Theme) { return themes[theme]; }
