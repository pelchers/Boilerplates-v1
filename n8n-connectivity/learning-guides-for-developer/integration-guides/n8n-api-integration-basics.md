# n8n API Integration Basics

📖 **What This File Does**
This guide explains how to use n8n to connect with external APIs using the HTTP Request node, including authentication, handling responses, and practical examples.

🔧 **Configuration Notes**
- n8n supports REST, GraphQL, and most HTTP APIs
- Use the HTTP Request node for custom integrations
- Store API keys and secrets in n8n's credential manager

---

## 1. Introduction to API Integration in n8n

n8n makes it easy to connect to any API, even if there's no built-in node. The HTTP Request node lets you send GET, POST, PUT, DELETE, and other requests to any endpoint.

---

## 2. Step-by-Step: Calling a Public API

### a. Add the HTTP Request Node
- In your workflow, click "+" and select **HTTP Request**.

### b. Configure the Request
- Set the **HTTP Method** (e.g., GET)
- Enter the **URL** (e.g., `https://api.coindesk.com/v1/bpi/currentprice.json`)

### c. Execute and Inspect
- Click **Execute Node**
- View the API response in the output panel

---

## 3. Using API Keys and Authentication

- In the HTTP Request node, go to the **Authentication** tab
- Choose the auth type (API Key, Basic Auth, OAuth2, etc.)
- Store credentials securely in n8n's credential manager
- Example: Add an API key as a header or query parameter

---

## 4. Handling API Responses

- The HTTP Request node outputs JSON by default
- Use the **Set** node to extract or transform data
- Use the **IF** node to branch based on response values
- Example: Send a Slack message if an API returns a specific value

---

## 5. Advanced Tips

- Use expressions (e.g., `{{$json["price"]}}`) to pass API data to other nodes
- Handle pagination by looping with the **SplitInBatches** node
- Use error handling to retry or alert on failed requests

---

## 6. Troubleshooting

- Check the response code and error message in the node output
- Ensure credentials are set up and valid
- Use the n8n logs for backend errors

---

## 7. Resources
- [n8n HTTP Request Node Docs](https://docs.n8n.io/nodes/n8n-nodes-base.httpRequest/) 