import { useState } from "react";
import { IdentityPanel } from "./IdentityPanel.js";
import { MessageBubble } from "./MessageBubble.js";
import { ChatInput } from "./ChatInput.js";
import "./styles.css";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

const DEMO_DID = "did:aetherself:demo123abc456def789ghi012jkl345mno";

export function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSend = (content: string) => {
    const userMsg: Message = { id: crypto.randomUUID(), role: "user", content, timestamp: Date.now() };
    setMessages((prev) => [...prev, userMsg]);
    setTimeout(() => {
      const aiMsg: Message = { id: crypto.randomUUID(), role: "assistant", content: `Echo: ${content}`, timestamp: Date.now() };
      setMessages((prev) => [...prev, aiMsg]);
    }, 500);
  };

  return (
    <div className="app">
      <header>
        <h1>🔮 AetherSelf Demo</h1>
        <p>Your AI identity in action</p>
      </header>
      <IdentityPanel did={DEMO_DID} connected={true} />
      <div className="chat-area">
        {messages.map((m) => (
          <MessageBubble key={m.id} role={m.role} content={m.content} timestamp={m.timestamp} />
        ))}
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
}
