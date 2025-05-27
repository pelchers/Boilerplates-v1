# Open Source AI Integration Deployment Methods (Web/Multi-Platform + AI)

> **Note:** All approaches support both pure web (React) and multi-platform (Capacitor+React) frontends. Capacitor+React enables deployment to iOS, Android, and web from a single codebase.

This document outlines **top approaches** for integrating open source AI models into custom web or multi-platform apps (monorepo for web, Capacitor+React for multi-platform). Each section details:

1. Codebase modification requirements (Y/N, minimal, conditional)
2. File/folder tree structure
3. Orchestration/API integration and AI model usage
4. Example: AI-driven artboard/presentation workflow builder

---

## 1. **Backend Model Server + API (Node.js/Python + Open Source Model)**

* **Codebase Modifications:** Minimal — frontend (React or Capacitor+React) calls backend API for AI features.
* **Integration:** REST/gRPC/WebSocket API between frontend and model server.
* **AI Model:** Ollama, LM Studio, Stable Diffusion, etc. run as a service.

### Example File Tree (Web/Multi-Platform + AI):

```
ai-app/
├── frontend/ (React or Capacitor+React)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── utils/
│   ├── public/
│   ├── package.json
│   └── README.md
├── backend/
│   ├── src/
│   │   ├── api/
│   │   ├── models/
│   │   ├── services/
│   │   └── app.js
│   ├── requirements.txt / package.json
│   └── README.md
```

### Notes:

* User prompts AI to generate a workflow; backend returns JSON for artboard layers, shapes, and text blocks.
* Frontend renders interactive, click-and-drag artboard (like Blender/Illustrator). Can be implemented as a web app or multi-platform app with Capacitor+React.

---

## 2. **n8n/MCP-Style Orchestration + Custom AI Nodes**

* **Codebase Modifications:** Minimal — trigger n8n flows from frontend (React or Capacitor+React), receive structured outputs.
* **Integration:** n8n (self-hosted/embedded) with custom nodes for open source models.
* **AI Model:** Any model accessible via HTTP/CLI in n8n.

### Example File Tree (Web/Multi-Platform + n8n):

```
ai-app/
├── frontend/ (React or Capacitor+React)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
├── n8n/
│   ├── docker-compose.yml
│   ├── custom-nodes/
│   └── README.md
```

### Notes:

* Frontend triggers n8n flow; n8n orchestrates AI model and returns workflow/artboard data.
* Good for modular, low-code automation. Frontend can be web or multi-platform (Capacitor+React).

---

## 3. **Direct Integration (WASM/JS AI Libraries)**

* **Codebase Modifications:** Minimal — add JS/TS AI libraries to frontend (React or Capacitor+React).
* **Integration:** Use ONNX.js, TensorFlow.js, or similar for in-browser/on-device AI.
* **AI Model:** Lightweight models only.

### Example File Tree (Web/Multi-Platform + JS AI):

```
ai-app/
├── frontend/ (React or Capacitor+React)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
```

### Notes:

* Good for real-time, on-device AI features. Works for both web and multi-platform (Capacitor+React) frontends.
* Limited to models that fit in browser memory and compute.

---

Let me know if you want a starter folder structure or code sample for any of these approaches! 