# Render Environment Reference for n8n

📖 **What This File Does**
This guide lists and explains environment variables, secrets, and configuration options for n8n deployments on Render.

🔧 **Configuration Notes**
- Set environment variables and secrets in the Render dashboard
- Use Render's environment groups for shared config
- Store sensitive values as secrets, not in code

---

## 1. Common and Advanced Environment Variables

| Variable                      | Description                                 | Example Value           |
|-------------------------------|---------------------------------------------|------------------------|
| DB_TYPE                       | Database type (postgresdb, mysqldb, sqlite) | postgresdb             |
| DB_POSTGRESDB_HOST            | Postgres host                               | render-pg.internal     |
| DB_POSTGRESDB_DATABASE        | Database name                               | n8n_db                 |
| DB_POSTGRESDB_USER            | DB user                                     | n8n_user               |
| DB_POSTGRESDB_PASSWORD        | DB password (set as secret)                 | (secret)               |
| N8N_BASIC_AUTH_ACTIVE         | Enable basic auth for editor                | true                   |
| N8N_BASIC_AUTH_USER           | Editor username                             | admin                  |
| N8N_BASIC_AUTH_PASSWORD       | Editor password (set as secret)             | (secret)               |
| N8N_HOST                      | Custom domain or Render URL                 | your-n8n.onrender.com  |
| N8N_PORT                      | Port to run n8n on                          | 5678                   |
| WEBHOOK_URL                   | Public webhook URL (for webhooks)           | https://...            |
| N8N_ENCRYPTION_KEY            | Encryption key for credentials (secret)     | (secret)               |
| N8N_LOG_LEVEL                 | Logging level (info, debug, warn, error)    | info                   |
| N8N_LOG_OUTPUT                | Log output (console, file)                  | console                |
| N8N_TUNNEL_SUBDOMAIN          | For webhook tunneling (n8n cloud)           | my-n8n-tunnel          |
| N8N_METRICS                   | Enable Prometheus metrics                   | true                   |

---

## 2. Example Render Environment Group Config
- In Render dashboard, create an **Environment Group**
- Add all shared variables (DB config, auth, encryption key, etc.)
- Attach the group to your n8n service(s)
- Example group:
  - `DB_TYPE=postgresdb`
  - `N8N_BASIC_AUTH_ACTIVE=true`
  - `N8N_ENCRYPTION_KEY=...`

---

## 3. Secret Rotation and Management
- Rotate secrets (passwords, API keys, encryption keys) regularly
- Update secrets in Render dashboard and redeploy service
- Document rotation schedule and responsible team members
- Use Render's secret management for all sensitive values

---

## 4. Troubleshooting Env/Config Issues
- **Service won't start:** Check for missing/typo'd env vars
- **DB connection errors:** Verify DB host, port, credentials, and network
- **Webhook issues:** Ensure `WEBHOOK_URL` is set and public
- **Logging not working:** Check `N8N_LOG_LEVEL` and `N8N_LOG_OUTPUT`
- **Config changes not applied:** Redeploy service after updating env vars

---

## 5. Resources
- [Render Environment Docs](https://render.com/docs/environment-variables)
- [n8n Environment Variables](https://docs.n8n.io/hosting/environment-variables/)
- [n8n Render Deployment Guide](https://docs.n8n.io/hosting/render/) 