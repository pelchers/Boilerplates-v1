# Advanced Local n8n Development

📖 **What This File Does**
This guide covers advanced local development with n8n, including version control, custom node development, debugging, and API integration.

🔧 **Configuration Notes**
- Use Git for version control of workflows and custom nodes
- Node.js 18+ recommended for custom dev
- Use n8n's built-in credential manager for secrets

---

## 1. Version Control for Workflows

- Export workflows as JSON for backup and sharing
- Store exported files in a Git repository
- Use descriptive commit messages for workflow changes
- Use `.gitignore` to exclude sensitive files (e.g., `.n8n/`)

---

## 2. Full Custom Node Development Walkthrough

### a. Scaffold a New Node
```bash
git clone https://github.com/n8n-io/n8n-nodes-starter.git my-node
cd my-node
npm install
```

### b. Edit the Node Code
- Open `nodes/MyNode/MyNode.node.ts` and implement your logic
- Example: Output a static message or process input data

### c. Build and Link the Node
```bash
npm run build
npm link
cd ../your-n8n-project
npm link n8n-nodes-my-node
```

### d. Test in n8n
- Start n8n and find your custom node in the editor
- Add it to a workflow and execute

---

## 3. Advanced Debugging

- Use `console.log()` in node code for output
- Run n8n with `DEBUG=* n8n` for verbose logs
- Use VSCode or Node.js Inspector for breakpoints:
  ```bash
  node --inspect-brk $(which n8n)
  ```
- Check node output and error panels in the UI

---

## 4. Docker Compose for Multi-Service Local Dev

- Example `docker-compose.yml`:
  ```yaml
  version: '3.1'
  services:
    n8n:
      image: n8nio/n8n
      ports:
        - 5678:5678
      environment:
        - DB_TYPE=postgresdb
        - DB_POSTGRESDB_HOST=db
        - DB_POSTGRESDB_DATABASE=n8n_db
        - DB_POSTGRESDB_USER=n8n_user
        - DB_POSTGRESDB_PASSWORD=yourpassword
      volumes:
        - ~/.n8n:/home/node/.n8n
    db:
      image: postgres:14
      environment:
        - POSTGRES_DB=n8n_db
        - POSTGRES_USER=n8n_user
        - POSTGRES_PASSWORD=yourpassword
      ports:
        - 5432:5432
  ```
- Start with:
  ```bash
  docker-compose up
  ```

---

## 5. Environment Variable Management

- Use `.env` files for local config
- Use `dotenv` or n8n's built-in support
- Example:
  ```env
  N8N_BASIC_AUTH_ACTIVE=true
  N8N_BASIC_AUTH_USER=admin
  N8N_BASIC_AUTH_PASSWORD=strongpassword
  ```
- Reference env vars in workflow expressions as needed

---

## 6. Resources
- [n8n Node Development Guide](https://docs.n8n.io/integrations/creating-nodes/)
- [n8n Community Forum](https://community.n8n.io/)
- [n8n Docker Compose Docs](https://docs.n8n.io/hosting/docker/) 