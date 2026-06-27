interface Props {
  memories: Array<{ type: string; content: string; tags: string[] }>;
}

export function MemoryList({ memories }: Props) {
  if (memories.length === 0) {
    return <div className="empty-state">No memories yet.</div>;
  }

  return (
    <div className="memory-list">
      {memories.map((m, i) => (
        <div key={i} className="memory-item">
          <span className="memory-type">{m.type}</span>
          <p className="memory-content">{m.content}</p>
          {m.tags.length > 0 && (
            <div className="memory-tags">
              {m.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
