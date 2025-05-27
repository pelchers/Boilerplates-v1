# Developing on Render-Hosted n8n

📖 **What This File Does**
This guide explains how to develop, test, and update workflows and custom nodes from within a Render-hosted n8n instance.

🔧 **Configuration Notes**
- Render services are updated via Git deploys or Docker image updates
- Use persistent disk for workflow and credential storage
- Set environment variables and secrets in Render dashboard

---

## 1. Workflow Development on Render
- Open the n8n editor at your Render URL
- Create and edit workflows as usual
- All changes are saved to the persistent disk
- **Export workflows:** In n8n UI, click "Download" to export as JSON
- **Import workflows:** In n8n UI, click "Import" and select your JSON file
- Use export/import for backup, migration, or sharing

---

## 2. Custom Node Development and Redeploy
- Develop custom nodes locally using the [n8n node starter](https://github.com/n8n-io/n8n-nodes-starter)
- Build and test locally
- Push changes to your Render-connected GitHub repo (if using Git deploy)
- Or rebuild and push your Docker image (if using Docker)
- **Redeploy:**
  - For Git: Push to main branch, Render auto-redeploys
  - For Docker: Push new image, click "Manual Deploy" in Render dashboard
- After redeploy, check n8n editor for new/updated nodes

---

## 3. Testing and Debugging
- Use the n8n UI to test workflows and inspect node outputs
- Monitor logs in the Render dashboard for errors
- Use environment variables to toggle dev/prod features
- **Using Render Shell:**
  - If enabled, open the Render shell for troubleshooting (e.g., check files, run commands)
  - Useful for checking persistent disk contents or logs

---

## 4. Troubleshooting
- **Workflows/nodes not updating:** Check deploy logs, persistent disk status, and clear browser cache
- **Credential issues:** Re-enter secrets in the n8n UI after redeploy (secrets may not persist if not on disk)
- **Node errors:** Check both n8n and Render logs for stack traces
- **Persistent disk issues:** Ensure disk is attached and mounted to `/home/node/.n8n`; check disk usage

---

## 5. Best Practices for Team Development
- Use Git for version control of custom nodes and workflow exports
- Document workflow changes and node updates in commit messages
- Schedule regular backups of the persistent disk
- Use Render's environment group feature for shared secrets
- Set up alerts for service health and errors
- Coordinate workflow edits to avoid overwrites (communicate with your team)

---

## 6. Resources
- [n8n Custom Node Guide](https://docs.n8n.io/integrations/creating-nodes/)
- [Render Docs](https://render.com/docs)
- [n8n Render Deployment Guide](https://docs.n8n.io/hosting/render/) 