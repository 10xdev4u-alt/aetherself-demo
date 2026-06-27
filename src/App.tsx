import { useState } from "react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

export function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const send = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: crypto.randomUUID(), role: "user", content: input, timestamp: Date.now() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    // ponytail: simulated response for demo
    setTimeout(() => {
      const aiMsg: Message = { id: crypto.randomUUID(), role: "assistant", content: `Echo: ${input}`, timestamp: Date.now() };
      setMessages((prev) => [...prev, aiMsg]);
    }, 500);
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20, fontFamily: "system-ui" }}>
      <h1>🔮 AetherSelf Demo</h1>
      <div style={{ border: "1px solid #333", borderRadius: 8, padding: 16, minHeight: 400, marginBottom: 16 }}>
        {messages.map((m) => (
          <div key={m.id} style={{ textAlign: m.role === "user" ? "right" : "left", margin: "8px 0" }}>
            <span style={{ background: m.role === "user" ? "#0066ff" : "#333", padding: "8px 12px", borderRadius: 12, display: "inline-block" }}>
              {m.content}
            </span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Type a message..."
          style={{ flex: 1, padding: 12, borderRadius: 8, border: "1px solid #333", background: "#111", color: "#fff" }}
        />
        <button onClick={send} style={{ padding: "12px 24px", borderRadius: 8, border: "none", background: "#0066ff", color: "#fff", cursor: "pointer" }}>
          Send
        </button>
      </div>
    </div>
  );
}
