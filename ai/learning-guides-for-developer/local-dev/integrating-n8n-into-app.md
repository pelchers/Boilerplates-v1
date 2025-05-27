# Integrating n8n into Your App (After Export & Local Hosting)

📖 **What This File Does**
Step-by-step guide for connecting your app to a locally hosted n8n instance, triggering workflows, and handling API calls securely.

🔧 **Configuration Notes**
- n8n must be running and accessible from your app (check CORS, firewall, and network settings)
- Use HTTPS and authentication in production

---

## 1. Host Your n8n Instance

- Deploy n8n locally or on a server (see deployment guide).
- Ensure n8n is running: open `http://localhost:5678` or your server URL.
- For remote access, configure CORS and firewall rules.

---

## 2. Trigger Workflows from Your App

- Use HTTP POST requests to n8n webhook URLs:
  ```js
  fetch('https://your-n8n-instance/webhook/my-workflow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ key: 'value' })
  })
  ```
- For authentication, use API keys or basic auth as configured in n8n.
- **Tip:** Test your webhook with Postman or curl before integrating.

---

## 3. Handle Workflow Responses

- n8n can return JSON, HTML, or other formats as configured in your workflow.
- In your app, handle the response to update UI, trigger next steps, or display results.
- **Troubleshooting:** If you get CORS errors, update n8n's CORS settings.

---

## 4. Best Practices

- Secure your n8n instance (firewall, authentication, HTTPS).
- Use environment variables for sensitive data in both n8n and your app.
- Monitor workflow execution and handle errors gracefully (log failures, show user-friendly messages).
- Document your workflow endpoints for your team.

---

See the [n8n API docs](https://docs.n8n.io/api/) for more details. 