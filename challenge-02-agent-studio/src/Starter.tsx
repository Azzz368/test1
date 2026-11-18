"use client";

import { useState } from "react";
import { Box, Layers, Moon, Send, Sun } from "lucide-react";
import BasicViewport from "./BasicViewport";
import Workflow from "./Workflow";

export default function Starter() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [tab, setTab] = useState<"studio" | "workflow">("studio");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  return <main className="studio-app" data-theme={theme}>
    <header className="topbar">
      <div className="brand"><Box size={22} /><strong>Agent Studio</strong><span>CHALLENGE 02</span></div>
      <button title="切换亮暗主题" aria-label="切换亮暗主题" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
      </button>
    </header>
    <section className="workspace">
      <div className="tabs" role="tablist" aria-label="工作区">
        <button role="tab" aria-selected={tab === "studio"} onClick={() => setTab("studio")}><Box size={15} />场景</button>
        <button role="tab" aria-selected={tab === "workflow"} onClick={() => setTab("workflow")}><Layers size={15} />画布</button>
      </div>
      <div className="view-area" hidden={tab !== "studio"}><BasicViewport /></div>
      <div className="view-area" hidden={tab !== "workflow"}><Workflow /></div>
    </section>
    <aside className="agent-panel">
      <header className="panel-heading"><h1>Agent</h1><span>未接入</span></header>
      <div className="messages" aria-label="消息记录" aria-live="polite">
        {messages.map((message, index) => <p key={index}>{message}</p>)}
      </div>
      <form className="composer" onSubmit={(event) => {
        event.preventDefault();
        if (!input.trim()) return;
        setMessages((current) => [...current, input.trim()]);
        setInput("");
      }}>
        <textarea aria-label="消息" value={input} maxLength={4000} onChange={(event) => setInput(event.target.value)} rows={3} />
        <button type="submit" title="发送消息" aria-label="发送消息" disabled={!input.trim()}><Send size={16} /></button>
      </form>
    </aside>
  </main>;
}