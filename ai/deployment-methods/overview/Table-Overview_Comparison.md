# Open Source AI Integration Framework Comparison Table

> **Note:** All approaches support both pure web (React) and multi-platform (Capacitor+React) frontends. Capacitor+React enables deployment to iOS, Android, and web from a single codebase.

This document provides a **condensed, comparative table** of the top approaches for integrating open source AI models into custom web or multi-platform apps. Below the table, we provide approach-specific **summaries** and **recommendations** for use cases like AI-powered, interactive presentation workflow builders.

---

## Comparison Table

| #  | Approach                        | Model Hosting | Orchestration | Multi-Platform | Real-Time UI | Capacitor+React Support | Example Use Case                        |
| -- | ------------------------------- | ------------- | ------------- | -------------- | ------------ | ---------------------- | ---------------------------------------- |
| 1  | Backend Model Server + API      | Local/Cloud   | Custom/API    | Yes            | Yes          | Yes                    | AI-driven artboard, drag-and-drop editor |
| 2  | n8n/MCP-Style + Custom Nodes    | Local/Cloud   | n8n Flows     | Yes            | Partial      | Yes                    | Modular workflow, AI-enhanced flows      |
| 3  | Direct Integration (WASM/JS)    | Browser/App   | JS/TS         | Yes            | Yes          | Yes                    | On-device AI, simple features            |

---

## Approach Format Summaries

### 1. **Backend Model Server + API**

* Run open source models (Ollama, Stable Diffusion, etc.) as a service.
* Frontend (React or Capacitor+React) calls API to get AI-generated workflow/artboard data.
* Example: User prompts AI, backend returns JSON for artboard layers, shapes, and text blocks.

### 2. **n8n/MCP-Style + Custom Nodes**

* Use n8n with custom nodes for open source models.
* Orchestrate flows and return structured outputs for frontend rendering.
* Good for modular, low-code automation. Works with React or Capacitor+React frontends.

### 3. **Direct Integration (WASM/JS)**

* Run lightweight models in browser/app using ONNX.js, TensorFlow.js, etc.
* Good for real-time, on-device AI features. Works with React or Capacitor+React frontends.

---

## Recommended Use Cases

| Purpose                        | Recommended Approach(s)                        |
| ------------------------------ | ---------------------------------------------- |
| AI-driven artboard/workflow    | **Backend Model Server + API**                 |
| Modular automation/flows       | **n8n/MCP-Style + Custom Nodes**               |
| On-device/real-time AI         | **Direct Integration (WASM/JS)**               |
| Multi-platform (web/mobile)    | **Backend Model Server**, **n8n/MCP-Style**    |

---

Let me know if you'd like visuals or starter code for any of these approaches. 