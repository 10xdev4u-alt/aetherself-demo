interface Props {
  did: string;
  connected: boolean;
}

export function IdentityPanel({ did, connected }: Props) {
  return (
    <div className="identity-panel">
      <div className="identity-header">
        <div className={`status-dot ${connected ? "online" : "offline"}`} />
        <span className="did-label">{did.slice(0, 24)}...</span>
      </div>
      <div className="identity-stats">
        <div className="stat"><span className="stat-value">0</span><span className="stat-label">Memories</span></div>
        <div className="stat"><span className="stat-value">1</span><span className="stat-label">Context</span></div>
        <div className="stat"><span className="stat-value">0</span><span className="stat-label">Relations</span></div>
      </div>
    </div>
  );
}
