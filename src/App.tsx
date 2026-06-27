import { useState } from "react";
import { Sidebar } from "./Sidebar.js";
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
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSend = (content: string) => {
    const userMsg: Message = { id: crypto.randomUUID(), role: "user", content, timestamp: Date.now() };
    setMessages((prev) => [...prev, userMsg]);
    setTimeout(() => {
      const aiMsg: Message = { id: crypto.randomUUID(), role: "assistant", content: `Echo: ${content}`, timestamp: Date.now() };
      setMessages((prev) => [...prev, aiMsg]);
    }, 500);
  };

  return (
    <div className={`app ${sidebarOpen ? "with-sidebar" : ""}`}>
      <div className="main-panel">
        <header>
          <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>☰</button>
          <h1>🔮 AetherSelf</h1>
        </header>
        <div className="chat-area">
          {messages.length === 0 && (
            <div className="welcome">
              <h2>Welcome to AetherSelf</h2>
              <p>Your portable AI identity. Start chatting to see it in action.</p>
            </div>
          )}
          {messages.map((m) => (
            <MessageBubble key={m.id} role={m.role} content={m.content} timestamp={m.timestamp} />
          ))}
        </div>
        <ChatInput onSend={handleSend} />
      </div>
      {sidebarOpen && <Sidebar did={DEMO_DID} />}
    </div>
  );
}
