interface Props {
  onSelect: (id: string) => void;
  activeId: string | null;
}

const CONVERSATIONS = [
  { id: "1", title: "General Chat", lastMessage: "Welcome to AetherSelf!" },
  { id: "2", title: "Memory Test", lastMessage: "Remember this..." },
  { id: "3", title: "Context Demo", lastMessage: "What am I doing?" },
];

export function ConversationList({ onSelect, activeId }: Props) {
  return (
    <div className="conversation-list">
      <h3>Conversations</h3>
      {CONVERSATIONS.map((c) => (
        <button
          key={c.id}
          className={`conversation-item ${c.id === activeId ? "active" : ""}`}
          onClick={() => onSelect(c.id)}
        >
          <span className="conversation-title">{c.title}</span>
          <span className="conversation-preview">{c.lastMessage}</span>
        </button>
      ))}
    </div>
  );
}
