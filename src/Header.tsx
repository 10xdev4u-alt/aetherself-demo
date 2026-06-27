import { ThemeToggle } from "./ThemeToggle.js";

interface Props {
  theme: "dark" | "light";
  onThemeToggle: () => void;
  onSidebarToggle: () => void;
}

export function Header({ theme, onThemeToggle, onSidebarToggle }: Props) {
  return (
    <header>
      <button className="sidebar-toggle" onClick={onSidebarToggle}>☰</button>
      <h1>🔮 AetherSelf</h1>
      <ThemeToggle theme={theme} onToggle={onThemeToggle} />
    </header>
  );
}
