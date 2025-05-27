# Deploying and Publishing n8n Workflows

📖 **What This File Does**
This guide explains how to export, deploy, and publish n8n workflows for production, including deployment options, best practices, and troubleshooting.

🔧 **Configuration Notes**
- Choose Docker, VM, or managed cloud for deployment
- Use environment variables for secrets
- Set up HTTPS and authentication for production

---

## 1. Exporting and Importing Workflows

- In the n8n UI, select a workflow and use **Export** to save as JSON
- Use **Import** to load workflows into another n8n instance
- Store exported files in version control for backup

---

## 2. Deployment Options (Step-by-Step)

### a. Docker Deployment
```bash
docker run -it --rm \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```
- For persistent data, map the `.n8n` folder to a safe location
- Use Docker Compose for multi-service setups (see advanced local dev guide)

### b. VM Deployment
- Install Node.js and n8n globally:
  ```bash
  curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
  apt-get install -y nodejs
  npm install -g n8n
  n8n
  ```
- Set up as a system service for reliability (e.g., with systemd)

### c. Managed Cloud
- Use [n8n Cloud](https://n8n.io/cloud) for zero-maintenance
- Follow onboarding to import workflows and set up credentials

---

## 3. Automating Deployment (CI/CD Basics)

- Use GitHub Actions, GitLab CI, or similar to automate Docker builds and deploys
- Example GitHub Actions step:
  ```yaml
  - name: Build and push Docker image
    run: |
      docker build -t myorg/n8n:latest .
      docker push myorg/n8n:latest
  ```
- Use environment variables and secrets in your CI/CD pipeline

---

## 4. Backup and Restore Strategies

- **Backup:**
  - Regularly back up the `.n8n` data folder and your database (Postgres/MySQL)
  - Example Postgres backup:
    ```bash
    pg_dump -U n8n_user n8n_db > n8n_backup.sql
    ```
- **Restore:**
  - Restore `.n8n` folder and DB to a new instance
  - Example Postgres restore:
    ```bash
    psql -U n8n_user n8n_db < n8n_backup.sql
    ```

---

## 5. Best Practices

- Use environment variables for secrets and config
- Set up HTTPS and authentication (see n8n docs for reverse proxy setup)
- Regularly back up your `.n8n` data folder and database
- Monitor logs and set up alerts for workflow failures
- Document your deployment for your team

---

## 6. Troubleshooting

- **Port Conflicts:** Ensure port 5678 is open and not in use
- **Import Errors:** Check JSON format and n8n version compatibility
- **Credential Issues:** Re-enter secrets after migration for security
- **Docker Issues:** Check container logs with `docker logs <container>`
- **Service Fails to Start:** Check system logs, permissions, and environment variables

---

## 7. Resources
- [n8n Deployment Docs](https://docs.n8n.io/hosting/)
- [n8n Backup & Restore](https://docs.n8n.io/hosting/backups/) 