# API Orchestration with n8n (Including AI-Powered Endpoints)

📖 **What This File Does**
This guide shows how to use n8n to orchestrate backend logic for a public API, including quota enforcement and AI-powered endpoints.

🔧 **Configuration Notes**
- Requires n8n with HTTP/Webhook, database, and AI nodes
- Store API keys and secrets securely
- Can be deployed on any n8n instance (local, cloud, Render)

---

## 1. Workflow Overview
- Trigger: API call (Webhook node)
- Quota Check: Database node to check user quota
- AI Step: Process or enrich data (OpenAI or other AI node)
- Response: Return result to API caller
- Logging: Store request/response in DB

---

## 2. Step-by-Step Workflow Build

### a. Add a Webhook Trigger
- Add **Webhook** node (POST method)
- Configure to receive API requests (e.g., `{ "userId": "...", "input": "..." }`)
- **Sample API Request (curl):**
  ```bash
  curl -X POST https://your-n8n/webhook/api-endpoint \
    -H "Content-Type: application/json" \
    -d '{"userId":"abc","input":"Summarize this text."}'
  ```
- **Sample API Response:**
  ```json
  { "result": "Summary of the input text." }
  ```

### b. Quota Enforcement
- Add **Database** node (e.g., Postgres)
- **Example Quota Table:**
  ```sql
  CREATE TABLE users (
    id TEXT PRIMARY KEY,
    quota INT,
    used INT
  );
  ```
- **Node Config:**
  - Operation: Execute Query
  - Query: `SELECT quota, used FROM users WHERE id = '{{$json["userId"]}}'`

### c. IF Node for Quota Check
- Add **IF** node after DB node
- **Condition:**
  - `{{$node["Database"].json["used"] < $node["Database"].json["quota"]}}`
- **True:** Continue to AI node
- **False:** Respond with error (e.g., "Quota exceeded")

### d. AI-Powered Endpoint
- Add **OpenAI** node (or other AI node)
- **Prompt Example:**
  - `{{$json["input"]}}`
- **Expected Output:**
  ```json
  { "result": "Summary of the input text." }
  ```

### e. Return API Response
- Add **Respond to Webhook** node
- Return AI result or error message

### f. Logging
- Add **Database** node to log request and response
- **Node Config:**
  - Operation: Insert
  - Fields: userId, input, result, timestamp

---

## 3. Example Node Configuration
- **Webhook:** Receives `{ "userId": "abc", "input": "text" }`
- **Database:** Query: `SELECT quota, used FROM users WHERE id = {{$json["userId"]}}`
- **IF:** `{{$node["Database"].json["used"] < $node["Database"].json["quota"]}}`
- **OpenAI:** Prompt: `{{$json["input"]}}`
- **Respond to Webhook:**
  - Return: `{{$node["OpenAI"].json["result"]}}`

---

## 4. Example Workflow Export
- [Download Example JSON](../exports/api-orchestration-with-n8n.json) *(add your export here)*

---

## 5. Scaling, Security, and AI Tips
- Use API keys or OAuth for authentication
- Rate-limit requests and monitor usage
- Validate all incoming data
- Monitor AI node usage and costs
- Use HTTPS for all endpoints

---

## 6. Troubleshooting
- **Quota check fails:** Check DB connection, user ID, and table schema
- **AI node errors:** Check API key, prompt, and input formatting
- **Webhook not triggered:** Check URL, method, and workflow activation
- **API returns error:** Inspect IF node logic and error handling
- **Logging fails:** Check DB node config and table

---

## 7. Extending the API
- Add more endpoints by duplicating the workflow or using Switch nodes
- Implement authentication (API keys, OAuth)
- Add more logging (e.g., request IP, user agent)
- Integrate with external services (e.g., billing, analytics)

---

## 8. Diagram
```
[Webhook] -> [DB: Quota] -> [IF]
                    |         |
                 [AI]      [Reject]
                    |
              [Respond]
                    |
                 [Log]
``` 