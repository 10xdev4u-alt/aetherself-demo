import { useState, useEffect } from "react";
import { healthCheck } from "./api.js";

export function ConnectionStatus() {
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const check = async () => setConnected(await healthCheck());
    check();
    const interval = setInterval(check, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`connection-status ${connected ? "online" : "offline"}`}>
      <span className="dot" />
      <span>{connected ? "Daemon connected" : "Daemon offline"}</span>
    </div>
  );
}
