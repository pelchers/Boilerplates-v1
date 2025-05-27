# Pushing Your Local n8n Instance to the Web

📖 **What This File Does**
Step-by-step guide for deploying your local n8n instance to the web, including workflow export/import, hosting options, and production best practices.

🔧 **Configuration Notes**
- Choose a hosting method (VM, Docker, managed cloud)
- Use environment variables for secrets
- Set up HTTPS and authentication for production

---

## 1. Export Your n8n Workflows

- In the n8n UI, select your workflow and use the "Export" option to save as JSON.
- Export all relevant workflows and credentials (store securely).

---

## 2. Choose a Hosting Option

- **Cloud VM:** AWS EC2, DigitalOcean, Azure, GCP, etc.
- **Docker:** Use Docker Compose for easy deployment and scaling.
- **Managed n8n Cloud:** [https://n8n.io/cloud](https://n8n.io/cloud)

---

## 3. Deploy n8n (Step-by-Step)

### a. Docker Deployment
```bash
docker run -it --rm \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```
- For persistent data, map the `.n8n` folder to a safe location.
- For Docker Compose, see [n8n Docker docs](https://docs.n8n.io/hosting/docker/).

### b. VM Deployment
- Install Node.js and n8n globally:
  ```bash
  npm install -g n8n
  n8n start
  ```
- Set up as a system service for reliability.

### c. Managed Cloud
- Follow onboarding at [n8n.io/cloud](https://n8n.io/cloud).

---

## 4. Import Workflows and Credentials

- Use the n8n UI to import your exported JSON workflows.
- Reconfigure any environment-specific credentials (API keys, DB connections).

---

## 5. Best Practices

- Use environment variables for secrets and config.
- Set up HTTPS and authentication (see n8n docs for reverse proxy setup).
- Regularly back up your `.n8n` data folder and database.
- Monitor logs and set up alerts for workflow failures.
- Document your deployment for your team.

---

## 6. Troubleshooting
- **Port Conflicts:** Make sure port 5678 is open and not in use.
- **Workflow Import Errors:** Check JSON format and n8n version compatibility.
- **Credential Issues:** Re-enter secrets after migration for security.

---

See the [n8n deployment docs](https://docs.n8n.io/hosting/) for more details. 