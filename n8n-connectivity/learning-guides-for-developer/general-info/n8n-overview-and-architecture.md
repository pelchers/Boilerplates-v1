# n8n Overview and Architecture

📖 **What This File Does**
This guide explains n8n's architecture, core components, extensibility, and how workflows are executed.

🔧 **Configuration Notes**
- n8n can be self-hosted or run in the cloud
- Supports PostgreSQL, SQLite, MySQL for persistence
- Extensible via custom nodes and community packages

---

## 1. What is n8n?

n8n ("nodemation") is an open-source workflow automation platform. It lets you connect APIs, databases, and services to automate tasks and data flows.

---

## 2. Core Architecture

- **Editor UI:** Web interface for building and managing workflows
- **Workflow Engine:** Executes workflows, manages state and data
- **Node Library:** Built-in and community nodes for integrations
- **Database:** Stores workflows, credentials, execution logs
- **Credential Manager:** Securely stores API keys, tokens, and secrets

---

## 3. How n8n Works (Execution Flow)

1. **Trigger:** Workflow starts via trigger node (webhook, schedule, manual, etc.)
2. **Node Execution:** Each node processes data and passes it to the next
3. **Data Flow:** Data is transformed, enriched, or routed as defined
4. **Completion:** Workflow ends when all nodes finish or a stop condition is met

---

## 4. Extensibility

- **Custom Nodes:** Write your own nodes in TypeScript/JavaScript
- **Community Nodes:** Install packages from the n8n community
- **Webhooks & API:** Integrate with external services via HTTP, REST, GraphQL, etc.
- **Custom Credentials:** Securely manage API keys, OAuth, and secrets for custom integrations
- **Plugins & Hooks:** Extend n8n with plugins or workflow hooks for custom logic
- **Environment Variables:** Configure n8n for different environments

---

## 5. Example: High-Level Architecture Diagram

```
+-------------------+
|   Editor UI       |
+-------------------+
         |
         v
+-------------------+
|  Workflow Engine  |
+-------------------+
         |
         v
+-------------------+
|   Node Library    |
+-------------------+
         |
         v
+-------------------+
|    Database       |
+-------------------+
         |
         v
+-------------------+
| Credential Manager|
+-------------------+
```

---

## 6. Scaling, Deployment, and Security

- **Scaling:**
  - Run multiple n8n instances behind a load balancer for high availability
  - Use external databases (PostgreSQL, MySQL) for shared state
  - Use Redis for queueing and distributed execution (enterprise)
- **Deployment Options:**
  - Docker, Docker Compose, Kubernetes, or direct Node.js
  - Managed n8n Cloud for zero-maintenance
- **Security:**
  - Use HTTPS and strong authentication
  - Restrict access to the editor and API endpoints
  - Store credentials securely and use environment variables for secrets
  - Regularly update n8n and dependencies

---

## 7. Example Use Cases

- **Automated Lead Routing:** Capture leads from a web form and send to CRM and Slack
- **Data Sync:** Sync data between Google Sheets and a database
- **Alerting:** Monitor an API and send alerts to email or chat
- **ETL Pipelines:** Extract, transform, and load data between services

---

## 8. Advanced Extensibility

- **Webhooks:** Create custom webhook endpoints for real-time integrations
- **Custom Credentials:** Add new credential types for APIs and services
- **Plugins:** Use or develop plugins to add new features or integrations
- **Workflow Hooks:** Run custom code before/after workflow execution
- **API:** Use the n8n REST API to manage workflows programmatically

---

## 9. Resources
- [n8n Documentation](https://docs.n8n.io/)
- [n8n GitHub](https://github.com/n8n-io/n8n)
- [n8n Community](https://community.n8n.io/) 