import { useState } from "react";

interface Props {
  onSend: (message: string) => void;
}

const SUGGESTIONS = [
  "What's my current context?",
  "Remember that I prefer dark mode",
  "Show my memories",
  "Update my identity",
];

export function Suggestions({ onSend }: Props) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="suggestions">
      {SUGGESTIONS.map((s) => (
        <button key={s} className="suggestion-btn" onClick={() => { onSend(s); setVisible(false); }}>
          {s}
        </button>
      ))}
    </div>
  );
}
