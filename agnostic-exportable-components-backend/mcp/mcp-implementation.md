# MCP Notification Backend: Implementation Guide

This guide explains how to import and configure the MCP notification backend code into your own Node.js/Express project. Follow these steps to ensure a smooth integration and proper operation of all notification channels.

---

## 1. Copy the Code
- Copy the entire `mcp/` folder (including all subfolders and files) from `@agnostic-exportable-components-backend` into your backend project (e.g., `src/components/mcp/`).
- Only include folders/files that contain actual code (no empty folders).

## 2. Install Required Dependencies
- You will need to install any dependencies for your chosen email/SMS/in-app providers. For example:
  ```sh
  npm install nodemailer twilio
  ```
- If you use a different provider (e.g., SendGrid, AWS SNS), install the appropriate package and update the utility files.

## 3. Configure Providers
- Update the utility files in `server/utils/` to connect to your actual email, SMS, and in-app notification systems:
  - `emailSender.ts`: Integrate with your email provider (e.g., set up SMTP, API keys)
  - `smsSender.ts`: Integrate with your SMS provider (e.g., Twilio credentials)
  - `inAppNotifier.ts`: Connect to your in-app notification system (e.g., push to DB, socket, or message queue)
- Example (Nodemailer):
  ```ts
  // In emailSender.ts
  import nodemailer from 'nodemailer';
  const transporter = nodemailer.createTransport({ /* ... */ });
  export async function sendEmail(userId, message, context) {
    // Lookup user email, send via transporter
  }
  ```

## 4. Integrate the Controller
- Import and use the `createNotification` controller in your Express app:
  ```ts
  import { createNotification } from './components/mcp/server/controllers/NotificationController';
  app.post('/notifications', createNotification);
  ```
- Ensure your request body includes: `userId`, `message`, `importance`, and optionally `context`.

## 5. Adapt Models as Needed
- The provided `Notification` and `UserPreference` models are generic. Adapt them to match your user schema and database as needed.
- Replace stub methods (e.g., `save()`, `getByUserId()`) with real database logic.

## 6. Test Notification Flows
- Test all notification channels (email, SMS, in-app) to ensure correct routing and delivery.
- Check user preferences and importance-based routing logic.

## 7. Example Usage
```ts
// Example Express route
app.post('/notifications', createNotification);
// Example request body
{
  "userId": "abc123",
  "message": "Your password was changed.",
  "importance": "high",
  "context": "security"
}
```

## 8. Additional Configuration
- Set up environment variables for provider credentials (e.g., SMTP, Twilio keys).
- Add logging, analytics, or error handling as needed.
- Extend the router/utilities to support new channels (push, Slack, etc.).

---

**Convention:** Every exportable grouping must include an `[grouping]-implementation.md` file with detailed instructions for importing, configuring, and integrating the code into a user's project. This ensures all exportable code is easy to adopt and productionize. 