import { useState } from "react";
import "./styles.css";

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
    setTimeout(() => {
      const aiMsg: Message = { id: crypto.randomUUID(), role: "assistant", content: `Echo: ${input}`, timestamp: Date.now() };
      setMessages((prev) => [...prev, aiMsg]);
    }, 500);
  };

  return (
    <div className="app">
      <header>
        <h1>🔮 AetherSelf Demo</h1>
        <p>Your AI identity in action</p>
        <div className="identity-badge"><span className="dot" /> Connected</div>
      </header>
      <div className="chat-area">
        {messages.map((m) => (
          <div key={m.id} className={`message ${m.role}`}>
            <div className="bubble">{m.content}</div>
          </div>
        ))}
      </div>
      <div className="input-bar">
        <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder="Type a message..." />
        <button onClick={send}>Send</button>
      </div>
    </div>
  );
}
