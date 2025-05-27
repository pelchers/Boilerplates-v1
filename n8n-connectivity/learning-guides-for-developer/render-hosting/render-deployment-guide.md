# Render Deployment Guide for n8n

📖 **What This File Does**
This guide explains how to deploy n8n on Render, including environment setup, persistent storage, scaling, troubleshooting, and migration from local to Render.

🔧 **Configuration Notes**
- Render supports Docker and Node.js services
- Use Render persistent disks for `.n8n` data
- Set environment variables and secrets in Render dashboard

---

## 1. Step-by-Step Render Dashboard Walkthrough
- Go to [https://dashboard.render.com/](https://dashboard.render.com/)
- Click **New Web Service**
- Choose **Docker** or **Node** (for custom Dockerfile or Node.js app)
- Connect your GitHub repo or use the official n8n Docker image (`n8nio/n8n`)
- **Fields to fill:**
  - **Name:** e.g., `n8n-prod`
  - **Branch:** e.g., `main`
  - **Root Directory:** (if needed)
  - **Environment:** Docker or Node
  - **Build Command:** (leave blank for Docker)
  - **Start Command:** (leave blank for Docker)

---

## 2. Example Dockerfile and Render YAML
- **Dockerfile (if customizing):**
  ```Dockerfile
  FROM n8nio/n8n:latest
  # Add custom nodes or config here
  ```
- **render.yaml (optional for IaC):**
  ```yaml
  services:
    - type: web
      name: n8n-prod
      env: docker
      plan: standard
      disk:
        name: n8n-data
        mountPath: /home/node/.n8n
      envVars:
        - key: DB_TYPE
          value: postgresdb
        - key: N8N_BASIC_AUTH_ACTIVE
          value: true
        # ...more vars
  ```

---

## 3. Configure Environment
- Set environment variables (DB config, credentials, etc.) in the Render dashboard
- Example:
  - `DB_TYPE=postgresdb`
  - `N8N_BASIC_AUTH_ACTIVE=true`
  - `N8N_BASIC_AUTH_USER=admin`
  - `N8N_BASIC_AUTH_PASSWORD=strongpassword`
- Add secrets (API keys, tokens) as environment variables

---

## 4. Persistent Storage
- Add a **Persistent Disk** to your service for `/home/node/.n8n`
- This ensures workflows, credentials, and data are saved across deploys
- **Disk size:** Start with 1GB, increase as needed

---

## 5. Scaling and Networking
- Use Render's scaling options:
  - **Manual:** Set instance size (Starter, Standard, Pro)
  - **Auto:** Enable autoscaling (Pro plan)
- Expose port 5678 (default n8n port)
- Set up custom domains and HTTPS via Render settings

---

## 6. Deploy and Test
- Deploy the service and monitor logs in the Render dashboard
- Open the n8n editor at your Render URL (e.g., `https://your-n8n.onrender.com`)
- Test workflow creation, credential setup, and webhooks

---

## 7. Troubleshooting
- **Persistent disk not saving:** Ensure disk is attached and mount path is `/home/node/.n8n`
- **Redeploy issues:** Check build logs and environment variable changes
- **DB connectivity:** Verify DB host, port, credentials, and Render's internal networking
- **Webhooks not working:** Ensure service is public and webhook URL is correct
- **Service not starting:** Check logs for port conflicts or missing env vars

---

## 8. Migrating from Local to Render
- **Export workflows:** In n8n UI, export as JSON
- **Import on Render:** Use n8n UI to import workflows
- **Copy .env values:** Set all required env vars in Render dashboard
- **Migrate DB:** Dump and restore your database if needed
- **Test all flows and webhooks after migration**

---

## 9. Best Practices
- Use environment variables for all secrets
- Regularly back up your persistent disk and database
- Restrict editor access with authentication
- Monitor usage and set up alerts in Render

---

## 10. Resources
- [Render Docs](https://render.com/docs)
- [n8n Render Deployment Guide](https://docs.n8n.io/hosting/render/) 