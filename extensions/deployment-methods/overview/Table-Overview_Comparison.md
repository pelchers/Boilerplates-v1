# Chrome Extension & Web Dashboard Framework Comparison Table

This document provides a **condensed, comparative table** of the top frameworks for building Chrome extensions that can also be deployed as websites or dashboards. Below the table, we provide framework-specific **codebase summaries** and **recommendations** based on typical extension/web use cases.

---

## Comparison Table

| #  | Framework / Stack              | Extension Support | Web Support | Language(s) | Codebase Mods | API Layer         | Ideal Use Case                        |
| -- | ------------------------------ | ---------------- | ----------- | ----------- | ------------- | ----------------- | ------------------------------------- |
| 1  | Vite + React (Plasmo/crxjs)    | Yes              | Yes         | JS/TS/React | Minimal       | Extension/Web API  | Extensions, dashboards, hybrid UIs     |
| 2  | Vanilla JS/TS + Vite           | Yes              | Yes         | JS/TS       | Minimal       | Extension/Web API  | Lightweight extensions, simple sites   |
| 3  | Next.js (custom build)         | Partial          | Yes         | JS/TS/React | Minor         | Extension/Web API  | Teams using Next.js, dashboards        |

---

## Codebase Format Summaries

### 1. **Vite + React (Plasmo/crxjs)**

* Single codebase for popup, content scripts, background, and web dashboard.
* Plasmo/crxjs handle manifest, HMR, and packaging.
* Shared UI and logic for extension and web.

### 2. **Vanilla JS/TS + Vite**

* Minimal setup, full control over extension and web output.
* Good for simple extensions or dashboards.

### 3. **Next.js (custom build)**

* Can be configured to output both static web and extension bundles.
* Good for teams already using Next.js for web dashboards.

---

## Recommended Use Cases

| Purpose                        | Recommended Framework(s)                        |
| ------------------------------ | ----------------------------------------------- |
| Extension + Dashboard Hybrid   | **Vite + React (Plasmo/crxjs)**, **Next.js**    |
| Lightweight Extension          | **Vanilla JS/TS + Vite**                        |
| Team/Enterprise Dashboard      | **Next.js**, **Vite + React (Plasmo/crxjs)**    |
| Custom/Advanced Extension      | **Vite + React (Plasmo/crxjs)**, **Vanilla JS** |

---

Let me know if you'd like visuals like diagrams or flowcharts comparing extension/web routing or deployment. 