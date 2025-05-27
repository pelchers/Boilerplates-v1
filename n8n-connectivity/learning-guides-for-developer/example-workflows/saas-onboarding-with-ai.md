# SaaS Onboarding Workflow with AI Enrichment

📖 **What This File Does**
This guide walks you through building a SaaS onboarding workflow in n8n, including AI-powered steps for user enrichment and automated communication.

🔧 **Configuration Notes**
- Requires n8n with access to email, database, and AI (e.g., OpenAI) nodes
- Can be run locally or on cloud/Render
- Store API keys and secrets in n8n credential manager

---

## 1. Workflow Overview
- Trigger: New user signup (Webhook or API call)
- AI Step: Summarize user input or generate a welcome message (OpenAI node)
- Database: Store user info (Postgres/MySQL node)
- Email: Send personalized welcome email (Email node)
- Optional: Notify team (Slack node)

---

## 2. Step-by-Step Workflow Build

### a. Add a Webhook Trigger
- Add **Webhook** node (POST method)
- Configure to receive user signup data
- **Sample Payload:**
  ```json
  {
    "email": "user@example.com",
    "profile": "CTO at Acme, loves automation and AI."
  }
  ```
- **Test with curl:**
  ```bash
  curl -X POST https://your-n8n/webhook/saas-onboarding \
    -H "Content-Type: application/json" \
    -d '{"email":"user@example.com","profile":"CTO at Acme, loves automation and AI."}'
  ```

### b. AI Enrichment
- Add **OpenAI** node (or other AI node)
- **Prompt Example:**
  ```
  Summarize this user profile for our team: {{$json["profile"]}}
  ```
- **Expected Output:**
  ```json
  { "summary": "CTO at Acme, passionate about automation and AI." }
  ```

### c. Store User in Database
- Add **Postgres** or **MySQL** node
- **Example SQL Table:**
  ```sql
  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT,
    profile TEXT,
    summary TEXT,
    created_at TIMESTAMP DEFAULT NOW()
  );
  ```
- **Node Config:**
  - Operation: Insert
  - Fields: email, profile, summary

### d. Send Welcome Email
- Add **Email** node
- Use AI-generated message as email body
- Map user email from webhook data
- **Example Email Body:**
  ```
  Hi there!
  Welcome to our platform. Here's a quick summary of your profile:
  {{$node["OpenAI"].json["summary"]}}
  Cheers,
  The Team
  ```

### e. Notify Team (Optional)
- Add **Slack** node to send a message to your team channel
- **Slack Message Example:**
  - Channel: #new-users
  - Message: `New user onboarded: {{$json["email"]}} | {{$node["OpenAI"].json["summary"]}}`

---

## 3. Example Node Configuration
- **Webhook:** Receives `{ "email": "user@example.com", "profile": "..." }`
- **OpenAI:**
  - Prompt: `Summarize this user profile: {{$json["profile"]}}`
  - Output: `{ "summary": "..." }`
- **Email:**
  - To: `{{$json["email"]}}`
  - Body: `{{$node["OpenAI"].json["summary"]}}`
- **Slack:**
  - Channel: `#new-users`
  - Message: `New user onboarded: {{$json["email"]}} | {{$node["OpenAI"].json["summary"]}}`

---

## 4. Example Workflow Export
- [Download Example JSON](../exports/saas-onboarding-with-ai.json) *(add your export here)*

---

## 5. Scaling, Security, and AI Tips
- Use environment variables for API keys and secrets
- Rate-limit or queue onboarding requests for scale
- Validate and sanitize all incoming data
- Monitor AI node usage and costs
- Use HTTPS for all webhooks and API calls

---

## 6. Troubleshooting
- **Webhook not triggered:** Check URL, method, and workflow activation
- **AI node errors:** Check API key, prompt, and input formatting
- **Email not sent:** Verify SMTP credentials and recipient address
- **Slack message fails:** Check Slack credentials and channel name
- **DB errors:** Check table schema and DB connection

---

## 7. Customizing for Your SaaS
- Add/remove fields as needed (e.g., company, plan, preferences)
- Adjust AI prompt for your brand voice or onboarding goals
- Add more steps (e.g., CRM integration, onboarding tasks)
- Localize email/Slack messages for different languages

---

## 8. Diagram
```
[Webhook] -> [OpenAI] -> [DB] -> [Email]
                        |
                     [Slack]
``` 