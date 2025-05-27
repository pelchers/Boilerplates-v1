# Web App User Action Automation with n8n

📖 **What This File Does**
This guide explains how to trigger n8n workflows from a web app for user actions, and how to return results to the UI or via API.

🔧 **Configuration Notes**
- Requires n8n with webhook/API access
- Web app must be able to send HTTP requests to n8n
- Use HTTPS and authentication in production

---

## 1. Workflow Overview
- Trigger: Web app sends HTTP request to n8n webhook
- Processing: n8n processes data (e.g., enrich, validate, transform)
- Response: n8n returns result to web app (API or UI)
- Optional: Store or log user action

---

## 2. Step-by-Step Workflow Build

### a. Add a Webhook Trigger
- Add **Webhook** node (POST method)
- Configure to receive user action data (e.g., `{ "userId": "...", "action": "..." }`)
- **Sample fetch call (JS):**
  ```js
  fetch('https://your-n8n/webhook/user-action', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId: 'abc', action: 'clicked_button' })
  })
    .then(res => res.json())
    .then(data => console.log(data));
  ```

### b. Process Data
- Add **Set** node to transform input
  - Example: Set `message` to `Action received: {{$json["action"]}}`
- Or add **Function** node for custom logic
  - Example:
    ```js
    return [{ json: { message: `User ${$json["userId"]} did: ${$json["action"]}` } }];
    ```
- Optionally add **OpenAI** node for enrichment
  - Prompt: `Summarize this user action: {{$json["action"]}}`

### c. Return Result to Web App
- Add **Respond to Webhook** node
- Return processed/enriched result

### d. Store or Log Action (Optional)
- Add **Database** node to log user action

---

## 3. Example Node Configuration
- **Webhook:** Receives `{ "userId": "abc", "action": "clicked_button" }`
- **Set:** Output: `{ "message": "Action received: clicked_button" }`
- **Function:** Output: `{ "message": "User abc did: clicked_button" }`
- **OpenAI (optional):** Prompt: `Summarize this user action: {{$json["action"]}}`
- **Respond to Webhook:**
  - Return: `{{$json["message"]}}` or `{{$node["OpenAI"].json["summary"]}}`

---

## 4. Example Workflow Export
- [Download Example JSON](../exports/web-app-user-action-automation.json) *(add your export here)*

---

## 5. Scaling, Security, and AI Tips
- Use authentication and HTTPS for all webhooks
- Validate and sanitize all incoming data
- Rate-limit requests to prevent abuse
- Monitor workflow execution and errors
- Use AI nodes for smart responses or enrichment

---

## 6. Troubleshooting
- **CORS errors:** Ensure webhook allows requests from your frontend domain
- **Auth issues:** Use API keys or session tokens as needed
- **Data mapping:** Check node configs and input/output structure
- **Workflow not triggered:** Check webhook URL, method, and workflow activation

---

## 7. Integrating with Your Frontend
- **React Example:**
  ```js
  import axios from 'axios';
  await axios.post('https://your-n8n/webhook/user-action', {
    userId: 'abc',
    action: 'clicked_button'
  });
  ```
- **Vue Example:**
  ```js
  this.$http.post('https://your-n8n/webhook/user-action', {
    userId: 'abc',
    action: 'clicked_button'
  });
  ```
- Handle the response to update UI or show notifications

---

## 8. Diagram
```
[Web App] -> [Webhook] -> [Set/AI/Function] -> [Respond]
                                   |
                                 [Log]
``` 