interface Props {
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

export function MessageBubble({ role, content, timestamp }: Props) {
  const time = new Date(timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div className={`message ${role}`}>
      <div className="bubble">
        <div className="content">{content}</div>
        <div className="timestamp">{time}</div>
      </div>
    </div>
  );
}
