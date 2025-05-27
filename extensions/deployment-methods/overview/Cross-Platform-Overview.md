# Chrome Extension & Web Dashboard Deployment Methods (Single Codebase: Extension + Web)

This document outlines **top frameworks or toolchains** that allow simultaneous or near-simultaneous deployment to **Chrome extension and web dashboard** from a **single codebase**. Each section details:

1. Codebase modification requirements (Y/N, minimal, conditional)
2. File/folder tree structure
3. Event/content script handling and routing system
4. API integration and communication methods

---

## 1. **Vite + React (Plasmo/crxjs)**

* **Codebase Modifications:** Minimal — mostly configuration per target (extension/web).
* **Event Handling:** React event system for UI, extension APIs for background/content scripts.
* **API Handling:** Uses fetch, chrome.runtime, storage, and web APIs as needed.

### Example File Tree:

```
extension-app/
├── src/
│   ├── popup/
│   ├── content/
│   ├── background/
│   ├── dashboard/
│   ├── components/
│   └── utils/
├── public/
├── manifest.json
├── package.json
└── README.md
```

### Notes:

* Plasmo/crxjs handle manifest, HMR, and packaging for extension.
* Shared components and logic for extension and web dashboard.

---

## 2. **Vanilla JS/TS + Vite**

* **Codebase Modifications:** Minimal — manual config for extension/web targets.
* **Event Handling:** Direct DOM events for UI, extension APIs for background/content scripts.
* **API Handling:** Uses fetch, chrome.runtime, storage, and web APIs as needed.

### Example File Tree:

```
vanilla-extension/
├── src/
│   ├── popup.js
│   ├── content.js
│   ├── background.js
│   ├── dashboard.js
│   └── utils.js
├── public/
├── manifest.json
├── package.json
└── README.md
```

### Notes:

* Good for lightweight extensions or simple dashboards.
* Full control over build and packaging.

---

## 3. **Next.js (custom build for extension/web)**

* **Codebase Modifications:** Minor — custom scripts for extension packaging.
* **Event Handling:** React event system for UI, extension APIs for background/content scripts.
* **API Handling:** Uses fetch, chrome.runtime, storage, and web APIs as needed.

### Example File Tree:

```
extension-nextjs/
├── src/
│   ├── popup/
│   ├── content/
│   ├── background/
│   ├── dashboard/
│   ├── components/
│   └── utils/
├── public/
├── manifest.json
├── package.json
└── README.md
```

### Notes:

* Good for teams already using Next.js for web dashboards.
* Requires custom build scripts for extension packaging.

---

Let me know if you want a starter folder structure or code sample for any of these stacks! 