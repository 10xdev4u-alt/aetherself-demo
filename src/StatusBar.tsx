interface Props {
  messageCount: number;
  isConnected: boolean;
}

export function StatusBar({ messageCount, isConnected }: Props) {
  return (
    <div className="status-bar">
      <span className={`status-indicator ${isConnected ? "online" : "offline"}`} />
      <span className="status-text">{isConnected ? "Connected" : "Disconnected"}</span>
      <span className="message-count">{messageCount} messages</span>
    </div>
  );
}
