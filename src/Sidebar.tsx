import { useState } from "react";

interface Props {
  did: string;
}

export function Sidebar({ did }: Props) {
  const [tab, setTab] = useState<"identity" | "memory" | "context">("identity");

  return (
    <div className="sidebar">
      <div className="sidebar-tabs">
        <button className={tab === "identity" ? "active" : ""} onClick={() => setTab("identity")}>Identity</button>
        <button className={tab === "memory" ? "active" : ""} onClick={() => setTab("memory")}>Memory</button>
        <button className={tab === "context" ? "active" : ""} onClick={() => setTab("context")}>Context</button>
      </div>
      <div className="sidebar-content">
        {tab === "identity" && (
          <div className="tab-panel">
            <h3>Your Identity</h3>
            <p className="did-text">{did}</p>
            <div className="info-row"><span>Algorithm</span><span>Ed25519</span></div>
            <div className="info-row"><span>Encryption</span><span>XChaCha20</span></div>
          </div>
        )}
        {tab === "memory" && (
          <div className="tab-panel">
            <h3>Memories</h3>
            <p className="empty-state">No memories yet. They'll appear as you chat.</p>
          </div>
        )}
        {tab === "context" && (
          <div className="tab-panel">
            <h3>Current Context</h3>
            <div className="context-card">
              <span className="context-activity">💬 Chat Demo</span>
              <span className="context-platform">aetherself-demo</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
