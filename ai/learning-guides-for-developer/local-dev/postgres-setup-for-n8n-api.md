# Setting Up PostgreSQL for n8n API & AI Workflows

📖 **What This File Does**
Step-by-step guide to installing, configuring, and securing PostgreSQL for use with n8n, including tips for AI workflow data management.

🔧 **Configuration Notes**
- PostgreSQL 12+ recommended
- n8n supports Postgres out of the box
- Store DB credentials securely (e.g., in `.env`)

---

## 1. Install PostgreSQL

- Download and install PostgreSQL from [https://www.postgresql.org/download/](https://www.postgresql.org/download/)
- On Windows, use the graphical installer; on Mac/Linux, use your package manager.
- After install, open the SQL shell (psql) and run:
  ```sql
  CREATE DATABASE n8n_db;
  CREATE USER n8n_user WITH PASSWORD 'yourpassword';
  GRANT ALL PRIVILEGES ON DATABASE n8n_db TO n8n_user;
  ```
- **Tip:** Use a strong, unique password for `n8n_user`.

---

## 2. Configure n8n to Use PostgreSQL

- Set environment variables in your `.env` file or Docker Compose:
  ```env
  DB_TYPE=postgresdb
  DB_POSTGRESDB_HOST=localhost
  DB_POSTGRESDB_PORT=5432
  DB_POSTGRESDB_DATABASE=n8n_db
  DB_POSTGRESDB_USER=n8n_user
  DB_POSTGRESDB_PASSWORD=yourpassword
  ```
- For Docker Compose, add these to the `environment:` section.
- Restart n8n to apply changes.
- **Troubleshooting:** If n8n can't connect, check firewall, DB port, and credentials.

---

## 3. API Calls and Data Management

- n8n now stores workflows, credentials, and logs in PostgreSQL.
- Query the DB for analytics, audit logs, or custom integrations.
- For AI workflows, store prompt/response data, user actions, and results for later analysis.
- **Tip:** Use DB tools like pgAdmin for inspection and backup.

---

## 4. Best Practices

- Use strong passwords and restrict DB access to localhost or your app server.
- Regularly back up your database (e.g., with `pg_dump`).
- Monitor performance and set up alerts for errors or slow queries.
- Store `.env` outside version control.

---

See the [n8n database docs](https://docs.n8n.io/hosting/database/) for more details. 