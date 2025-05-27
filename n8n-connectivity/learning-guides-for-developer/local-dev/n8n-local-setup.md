# n8n Local Setup Guide

📖 **What This File Does**
This guide walks you through installing and running n8n locally, configuring your environment, setting up a database, and testing your first workflow.

🔧 **Configuration Notes**
- Supports Windows, Mac, Linux
- Can use SQLite (default), PostgreSQL, or MySQL
- Node.js 18+ recommended

---

## 1. Install n8n

- **Install Node.js (18+):**
  - Download from [https://nodejs.org/](https://nodejs.org/)
  - Verify install:
    ```bash
    node -v
    npm -v
    ```
- **Install n8n globally:**
  ```bash
  npm install -g n8n
  ```
- **Or use Docker:**
  ```bash
  docker run -it --rm \
    -p 5678:5678 \
    -v ~/.n8n:/home/node/.n8n \
    n8nio/n8n
  ```
- **Update n8n:**
  ```bash
  npm update -g n8n
  ```

---

## 2. Configure Environment

- **Default (SQLite):** No extra config needed.
- **Switch to PostgreSQL:**
  - Install PostgreSQL and create a database/user.
  - Add to `.env`:
    ```env
    DB_TYPE=postgresdb
    DB_POSTGRESDB_HOST=localhost
    DB_POSTGRESDB_PORT=5432
    DB_POSTGRESDB_DATABASE=n8n_db
    DB_POSTGRESDB_USER=n8n_user
    DB_POSTGRESDB_PASSWORD=yourpassword
    ```
- **Switch to MySQL:**
  - Add to `.env`:
    ```env
    DB_TYPE=mysqldb
    DB_MYSQLDB_HOST=localhost
    DB_MYSQLDB_PORT=3306
    DB_MYSQLDB_DATABASE=n8n_db
    DB_MYSQLDB_USER=n8n_user
    DB_MYSQLDB_PASSWORD=yourpassword
    ```
- **Restart n8n** after changing DB config.

---

## 3. Start n8n

- **Terminal:**
  ```bash
  n8n
  ```
- **Browser:** Open [http://localhost:5678](http://localhost:5678)

---

## 4. First Automation Example: Email Notification

- **Goal:** Send yourself an email when a new row is added to a Google Sheet.
- **Steps:**
  1. Add **Google Sheets Trigger** ("On New Row")
  2. Add **Email** node (configure SMTP credentials)
  3. Connect nodes and map data fields
  4. Activate workflow and test by adding a row

---

## 5. Troubleshooting

- **n8n won't start:** Check Node.js version, reinstall n8n, check logs.
- **DB connection errors:** Verify credentials, DB running, firewall settings.
- **Port 5678 in use:** Stop other services or change port with `--tunnel` or env var.
- **Workflow not executing:** Ensure workflow is active and trigger is configured.
- **Logs:** View terminal output for errors.

---

## 6. Resources
- [n8n Local Setup Docs](https://docs.n8n.io/hosting/installation/)
- [n8n Database Setup](https://docs.n8n.io/hosting/database/) 