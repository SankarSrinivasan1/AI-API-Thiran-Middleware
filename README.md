# AI-API-Thiran-Middleware

# 🛡️ ThiranShield.js  
### AI API Thiran Middleware

A simple, production-ready Node.js middleware to **secure, control, and protect AI API usage** in LLM-powered applications.

No feature gating. No multiple tiers.  
One package. Full functionality.

---

## 🚀 What is this?

**ThiranShield.js** is a plug-and-play middleware for Express-style apps that sits between your users and your AI APIs.

It protects your system from:
- 💸 Unexpected token costs  
- 🤖 Abuse and spam traffic  
- 🧨 Prompt injection attacks  
- 🔁 Runaway tool/function calls  
- 📦 Oversized or malicious inputs  

Think of it as a:

> **Firewall + Budget Controller for AI APIs**

---

## ⚠️ Why you need this

If you're using LLMs (GPT, Claude, etc.), you are exposed to:

- Users sending **huge prompts**
- Bots spamming your API
- Prompt injection attempts like:
  - “ignore previous instructions”
  - “reveal system prompt”
- Infinite tool loops (agent gone wild)
- Silent cost explosions 💀

Most apps don’t handle this properly.

**ThiranShield.js fixes that in one line.**

---

## 🔌 Installation

```bash
npm install thiranshield


---

⚙️ Quick Start

const express = require('express');
const ThiranShield = require('thiranshield');

const app = express();
app.use(express.json());

app.use(ThiranShield());

app.post('/ai', async (req, res) => {
  // Your LLM call here
  res.json({ success: true });
});

app.listen(3000);


---

🧠 What it does (Under the hood)

Every request passes through a pipeline of guards:

Request
  ↓
Rate Limiter
  ↓
Input Guard
  ↓
Prompt Filter
  ↓
Cost Tracker
  ↓
Tool Guard
  ↓
Your API / LLM


---

🔐 Features

🚦 Rate Limiting

Per IP / API key

Sliding window approach

Prevents abuse and spam



---

🧨 Prompt Injection Protection

Detects suspicious patterns

Flags or blocks malicious prompts

Lightweight but effective



---

📏 Input & Output Control

Max input size enforcement

Prevents oversized payloads

Hooks for output/token limits



---

💸 Cost Protection

Estimates token usage per request

Tracks per-user usage

Hard cutoff when limits are exceeded



---

🛠️ Tool Usage Guard

Limits number of tool/function calls

Prevents recursive agent loops



---

📊 Logging & Monitoring

Structured logs for:

Requests

Blocks

Violations


Easy to plug into any logging system.


---

⚙️ Configuration

Default config works out of the box, but you can customize:

app.use(ThiranShield({
  rateLimit: {
    windowMs: 60 * 1000,
    max: 100
  },
  input: {
    maxChars: 10000
  },
  cost: {
    maxTokensPerUser: 50000
  },
  tools: {
    maxPerRequest: 5
  },
  promptBlock: true
}));


---

📊 Example Logs

{
  "type": "request",
  "ip": "127.0.0.1",
  "tokens": 120,
  "flags": []
}

{
  "type": "block",
  "reason": "Rate limit exceeded",
  "ip": "127.0.0.1"
}


---

🧩 How it fits

Without ThiranShield:

User → API → LLM → 💸 Surprise bill

With ThiranShield:

User → ThiranShield → API → LLM → ✅ Controlled + Safe


---

🎯 Who is this for?

AI SaaS builders

Chatbot developers

AI agent creators

Internal AI tools


If users can send prompts → you need this.


---

🧠 Design Philosophy

Simple > Clever

Practical > Perfect

Works in 5 minutes > “Enterprise-ready” nonsense



---

⚠️ Current Limitations

In-memory storage (not distributed)

Token estimation is approximate

Basic pattern-based prompt detection



---

🔜 Roadmap

Redis support for scaling

Output filtering

Streaming support

OpenTelemetry integration



---

🤝 Contributing

PRs welcome. Keep it simple. Keep it practical.


---

📄 License

MIT


---

💬 Final Thought

You don’t notice missing security…
until your API bill arrives.

ThiranShield.js is that quiet layer that prevents regret.
