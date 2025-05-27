# n8n Workflow Basics

📖 **What This File Does**
This guide introduces the fundamentals of n8n workflows, including core concepts, nodes, triggers, and how to build your first automation.

🔧 **Configuration Notes**
- n8n can be run locally (Docker, npm) or in the cloud
- No coding required for basic workflows
- Recommended: latest n8n version

---

## 1. What is n8n?

n8n is a powerful, open-source workflow automation tool that lets you connect apps, APIs, and services with no/low code. It enables you to automate repetitive tasks, integrate data, and build custom automations.

---

## 2. Workflow Concepts

- **Workflow:** A series of connected steps (nodes) that automate a process.
- **Node:** A single step in a workflow (e.g., HTTP request, send email, transform data).
- **Trigger:** A special node that starts the workflow (e.g., webhook, schedule, manual).
- **Execution:** The process of running a workflow from start to finish.
- **Branching:** Use nodes like "IF" to create conditional logic and multiple paths.
- **Variables:** Use workflow or node variables to store and reuse data.

---

## 3. Visual: Simple Workflow Diagram

```
[Manual Trigger] → [Set Node] → [Slack Node]
```

---

## 4. Building Your First Workflow (Step-by-Step)

### a. Start n8n
- Run `n8n` locally or access your cloud instance.
- Open the n8n editor UI (default: http://localhost:5678).

### b. Create a New Workflow
- Click **New Workflow**.
- Give your workflow a name (e.g., "Hello World").

### c. Add a Trigger Node
- Click the "+" button and select a trigger (e.g., **Manual Trigger** for testing).

### d. Add an Action Node
- Click the "+" button after the trigger.
- Choose an action (e.g., **Set** node to define static data, or **HTTP Request** to call an API).

### e. Connect the Nodes
- Drag from the trigger node's output to the action node's input.

### f. Execute the Workflow
- Click **Execute Workflow** (or use the trigger, e.g., send a webhook).
- View the output in the node's panel.

---

## 5. Real-World Example: Slack Notification Workflow

**Goal:** Send a Slack message when a new row is added to a Google Sheet.

1. **Trigger:** Use the **Google Sheets Trigger** node ("On New Row").
2. **Action:** Add a **Slack** node to send a message to a channel.
3. **Connect:** Link the trigger to the Slack node.
4. **Configure:** Set up Google Sheets and Slack credentials in n8n.
5. **Test:** Add a row to your sheet and watch the Slack message appear.

---

## 6. Advanced Tips

- **Branching:** Use the **IF** node to create conditional logic (e.g., only send Slack if a value matches).
- **Error Handling:** Use the **Error Trigger** node to catch and respond to workflow errors.
- **Workflow Variables:** Use the **Set** node or expressions (e.g., `{{$json["email"]}}`) to pass data between nodes.
- **Reusable Workflows:** Use the **Execute Workflow** node to call other workflows as subroutines.

---

## 7. Troubleshooting & Debugging

- **Node Fails:** Check the error message in the UI; click the red exclamation mark for details.
- **Credential Issues:** Make sure all required credentials are set up in n8n's credential manager.
- **Data Not Passing:** Use the **Set** node or debug panel to inspect and transform data.
- **Logs:** Check n8n logs (console or file) for backend errors.
- **Community Help:** Visit the [n8n community forum](https://community.n8n.io/) for support.

---

## 8. Next Steps
- Explore more nodes (email, Slack, Google Sheets, etc.).
- Use built-in templates for common automations.
- Read the [n8n docs](https://docs.n8n.io/) for advanced features. 