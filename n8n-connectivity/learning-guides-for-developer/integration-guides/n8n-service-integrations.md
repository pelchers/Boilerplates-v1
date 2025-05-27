# n8n Service Integrations

📖 **What This File Does**
This guide shows how to connect n8n to popular services like Slack, Google Sheets, and Airtable using built-in nodes, with step-by-step setup and examples.

🔧 **Configuration Notes**
- n8n has built-in nodes for many popular services
- Credentials are managed securely in n8n
- Some services require OAuth2 or API keys

---

## 1. Integrating with Slack

### a. Add the Slack Node
- In your workflow, click "+" and select **Slack**

### b. Set Up Credentials
- In the node, click **Create New** under credentials
- Follow prompts to connect your Slack account (OAuth2)

### c. Send a Message Example
- Set **Resource** to "Message"
- Set **Operation** to "Post"
- Enter the channel and message text
- Execute the node to send a message

---

## 2. Integrating with Google Sheets

### a. Add the Google Sheets Node
- In your workflow, click "+" and select **Google Sheets**

### b. Set Up Credentials
- Click **Create New** under credentials
- Authenticate with your Google account

### c. Add Row Example
- Set **Operation** to "Add Row"
- Select your spreadsheet and sheet
- Map data fields as needed
- Execute the node to add a row

---

## 3. Integrating with Airtable

### a. Add the Airtable Node
- In your workflow, click "+" and select **Airtable**

### b. Set Up Credentials
- Enter your Airtable API key in the credentials manager

### c. Create Record Example
- Set **Operation** to "Create"
- Enter base ID, table, and data fields
- Execute the node to create a record

---

## 4. Tips and Troubleshooting
- Always test credentials before running workflows
- Use the node output panel to debug data
- For OAuth2, ensure redirect URIs are set correctly

---

## 5. Resources
- [n8n Integrations List](https://n8n.io/integrations/) 