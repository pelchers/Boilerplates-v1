# Project Context: Open Source AI Integration for Web & Multi-Platform Apps

## What We're Trying to Achieve

This project aims to provide clear, actionable guidance and best practices for integrating open source (MIT/non-restrictive) AI models into custom web or multi-platform apps. The goal is to make it easy for developers and teams to:

- **Integrate open source AI models** (LLMs, image generators, workflow planners, etc.) into web (monorepo) or multi-platform (Capacitor+React) apps.
- **Orchestrate AI-powered workflows** using custom backends, n8n/MCP-style flows, or direct in-app integration.
- **Enable advanced user experiences** such as:
  - A web app where users prompt AI to build presentation workflows that are click-and-drag editable (like Blender or Adobe Illustrator artboards).
  - AI generates a JSON structure of artboard layers, shapes, and text blocks, which the frontend renders and allows users to edit interactively.
  - Users can further refine, rearrange, or add to the AI-generated content.
- **Support both simple and advanced use cases**: From direct in-browser AI to orchestrated, multi-step backend flows.

## Example Use Case (Rehashed)

- **Interactive AI Artboard Builder:**
  - User enters a prompt (e.g., "Create a 5-slide pitch deck on renewable energy").
  - Backend (Node.js/Python) or n8n/MCP flow calls an open source LLM and/or image model.
  - AI returns a structured JSON describing artboards, layers, shapes, and text blocks.
  - Frontend (React, Capacitor+React) renders the artboard, allowing click-and-drag editing, layer rearrangement, and further user-driven changes.
  - All orchestration is handled via API endpoints, n8n flows, or direct JS/TS integration, depending on the stack.

## Orchestration Parallels (n8n/MCP)

- The orchestration can be handled similarly to n8n/MCP setups:
  - Use n8n for modular, low-code automation and AI node integration.
  - Or use a custom backend for more control and flexibility.
  - Direct JS/TS integration is possible for lightweight, real-time features.

## Developer Experience

- The goal is to minimize friction: easy setup, clear docs, and reusable patterns for integrating open source AI into any stack.
- Support for both low-code (n8n UI) and pro-code (custom backend, direct JS/TS) workflows.
- Enable rapid prototyping and scalable, production-ready deployments.

---

This context file should be referenced by anyone designing, deploying, or integrating open source AI-powered features into web or multi-platform apps in this project. 