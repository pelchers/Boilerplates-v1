# n8n Connectivity Framework Comparison Table

This document provides a **condensed, comparative table** of the top approaches for connecting n8n to web apps or APIs (self-hosted or managed). Below the table, we provide approach-specific **summaries** and **recommendations** for n8n-powered automation and AI-enhanced flows.

---

## Comparison Table

| #  | Approach                        | Self-Hosted | Managed | API/Webhook Support | AI/ML Node Support | Ideal Use Case                        |
| -- | ------------------------------- | ----------- | ------- | ------------------- | ------------------ | ------------------------------------- |
| 1  | n8n Cloud + API Integration     | No          | Yes     | Yes                 | Yes                | SaaS, quick start, managed scaling     |
| 2  | Self-Hosted n8n + Webhooks      | Yes         | No      | Yes                 | Yes                | Full control, custom integrations      |
| 3  | n8n Embedded (Docker/K8s)       | Yes         | No      | Yes                 | Yes                | Internal automation, microservices     |

---

## Approach Format Summaries

### 1. **n8n Cloud + API Integration**

* Managed n8n instance, no server setup.
* Connect to your app/API via webhooks, HTTP, or direct integrations.
* Good for SaaS, startups, and teams without DevOps.

### 2. **Self-Hosted n8n + Webhooks**

* Deploy n8n on your own server (Docker, VM, etc.).
* Full control over integrations, security, and scaling.
* Good for regulated industries or custom needs.

### 3. **n8n Embedded (Docker/K8s)**

* Run n8n as a service within your infrastructure.
* Use internal APIs for secure, low-latency automation.
* Good for microservices and internal tools.

---

## Recommended Use Cases

| Purpose                        | Recommended Approach(s)                        |
| ------------------------------ | ---------------------------------------------- |
| Managed SaaS Automation        | **n8n Cloud + API Integration**                |
| Custom/Regulated Automation    | **Self-Hosted n8n + Webhooks**                 |
| Internal Microservices         | **n8n Embedded (Docker/K8s)**                  |
| AI-Enhanced User Flows         | **Any (add OpenAI/MCP nodes in n8n)**          |

---

Let me know if you'd like visuals like diagrams or flowcharts comparing n8n connectivity or deployment. 