interface Props {
  show: boolean;
  onClose: () => void;
}

export function AboutModal({ show, onClose }: Props) {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>🔮 About AetherSelf</h2>
        <p>Your AI Identity Layer — portable, encrypted, user-owned.</p>
        <div className="modal-info">
          <div className="info-row"><span>Version</span><span>0.1.0</span></div>
          <div className="info-row"><span>Protocol</span><span>aetherself/0.1</span></div>
          <div className="info-row"><span>Encryption</span><span>XChaCha20-Poly1305</span></div>
          <div className="info-row"><span>License</span><span>MIT</span></div>
        </div>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
