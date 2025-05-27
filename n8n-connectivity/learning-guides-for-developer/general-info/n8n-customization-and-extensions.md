# n8n Customization and Extensions

📖 **What This File Does**
This guide explains how to customize and extend n8n, including adding custom nodes, using community packages, and advanced configuration.

🔧 **Configuration Notes**
- n8n supports custom nodes in TypeScript/JavaScript
- Community nodes can be installed via npm or the UI
- Use environment variables for advanced config

---

## 1. Why Customize n8n?

- Integrate with services not covered by built-in nodes
- Add business logic or custom data processing
- Enhance workflows with new triggers or actions

---

## 2. Adding Custom Nodes (Step-by-Step)

### a. Scaffold a Custom Node
- Use the [n8n node starter](https://github.com/n8n-io/n8n-nodes-starter) template
- Clone the repo and follow the README to build your node

### b. Example: Minimal Custom Node Code
```typescript
import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class HelloWorldNode implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Hello World',
    name: 'helloWorld',
    group: ['transform'],
    version: 1,
    description: 'A simple custom node',
    defaults: { name: 'Hello World' },
    inputs: ['main'],
    outputs: ['main'],
    properties: [],
  };
  async execute() {
    return [ [ { json: { message: 'Hello from custom node!' } } ] ];
  }
}
```

### c. Install the Node
- Build your node package (`npm run build`)
- Install it in your n8n instance:
  ```bash
  npm install /path/to/your-node
  n8n start
  ```
- The node will appear in the n8n editor

---

## 3. Using Community Packages

- Browse [n8n community nodes](https://n8n.io/integrations/community/)
- **Example:** Install the [n8n-nodes-openai](https://www.npmjs.com/package/n8n-nodes-openai) package:
  ```bash
  npm install n8n-nodes-openai
  n8n start
  ```
- Restart n8n to load new nodes

---

## 4. Advanced Extension: Custom Credentials, Plugins, Workflow Hooks

- **Custom Credentials:**
  - Create new credential types for APIs (see [custom credentials guide](https://docs.n8n.io/integrations/creating-nodes/credentials/))
- **Plugins:**
  - Use or develop plugins to add features (see [n8n plugins](https://docs.n8n.io/integrations/plugins/))
- **Workflow Hooks:**
  - Add hooks to run custom code before/after workflow execution (see [workflow hooks](https://docs.n8n.io/integrations/creating-nodes/workflow-hooks/))

---

## 5. Advanced Configuration

- Use environment variables to control n8n behavior (e.g., DB, credentials, logging)
- See [n8n config docs](https://docs.n8n.io/hosting/environment-variables/)

---

## 6. Best Practices
- Keep custom nodes in version control
- Test thoroughly before deploying to production
- Contribute useful nodes back to the community

---

## 7. Resources
- [n8n Node Development Guide](https://docs.n8n.io/integrations/creating-nodes/)
- [n8n Community Nodes](https://n8n.io/integrations/community/)
- [n8n Plugins](https://docs.n8n.io/integrations/plugins/)
- [n8n Environment Variables](https://docs.n8n.io/hosting/environment-variables/) 