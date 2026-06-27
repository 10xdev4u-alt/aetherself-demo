interface Props {
  onClear: () => void;
  messageCount: number;
}

export function ClearChat({ onClear, messageCount }: Props) {
  if (messageCount === 0) return null;

  return (
    <button className="clear-chat" onClick={onClear} title="Clear chat">
      🗑️ Clear
    </button>
  );
}
