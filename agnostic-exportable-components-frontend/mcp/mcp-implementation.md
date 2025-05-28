# MCP Notification Frontend: Implementation Guide

This guide explains how to import and configure the MCP notification frontend code into your own Vite+React+Tailwind project (or similar). Follow these steps to ensure a smooth integration and a fully functional notification UI.

---

## 1. Copy the Code
- Copy the entire `mcp/` folder (including all subfolders and files) from `@agnostic-exportable-components-frontend` into your frontend project (e.g., `src/components/mcp/`).
- Only include folders/files that contain actual code (no empty folders).

## 2. Install Required Dependencies
- You will need to install dependencies for API calls and toast notifications. For example:
  ```sh
  npm install axios react-toastify
  ```
- If you use a different HTTP or toast library, update the utility/component files accordingly.

## 3. Configure API Endpoints
- The API utility (`client/utils/notificationApi.ts`) assumes the following backend endpoints:
  - `GET /api/notifications` — fetch all notifications
  - `POST /api/notifications/:id/read` — mark a notification as read
- Update these endpoints in the utility if your backend uses different routes.
- Ensure CORS is configured if your frontend and backend are on different domains.

## 4. Integrate Components
- Import and use the components in your app layout:
  ```tsx
  import { NotificationBell } from './components/mcp/client/components/NotificationBell';
  import { NotificationInbox } from './components/mcp/client/components/NotificationInbox';
  import { NotificationToast } from './components/mcp/client/components/NotificationToast';
  import { useNotifications } from './components/mcp/client/hooks/useNotifications';
  ```
- Example usage in a layout:
  ```tsx
  const { notifications, unreadCount, markAsRead } = useNotifications();
  const [inboxOpen, setInboxOpen] = useState(false);

  <NotificationBell unreadCount={unreadCount} onClick={() => setInboxOpen(true)} />
  {inboxOpen && (
    <NotificationInbox
      notifications={notifications}
      onMarkAsRead={markAsRead}
      onClose={() => setInboxOpen(false)}
    />
  )}
  ```
- Use `NotificationToast` for real-time popups as needed.

## 5. Adapt Notification Data Model
- The provided notification model is generic. Adapt it to match your backend data as needed (see `NotificationItem` type).
- Update the API utility and hook if your data structure differs.

## 6. Style Customization
- All components use TailwindCSS base styles (see `client/styles/notification-base-styles.ts`).
- You can override or extend these styles as needed for your project.

## 7. Test Notification Flows
- Test all UI components (bell, toast, inbox) to ensure correct display and interaction.
- Check real-time updates (polling or websocket) if implemented.

## 8. Example Usage
```tsx
import { NotificationBell, NotificationInbox, useNotifications } from './components/mcp/client';
const { notifications, unreadCount, markAsRead } = useNotifications();
// ...
<NotificationBell unreadCount={unreadCount} onClick={openInbox} />
<NotificationInbox notifications={notifications} onMarkAsRead={markAsRead} onClose={closeInbox} />
```

## 9. Additional Configuration
- Set up environment variables for API base URLs if needed.
- Add accessibility and mobile responsiveness as required.
- Extend components for new UI patterns (banners, modals, etc.).

---

**Convention:** Every exportable grouping must include a `[grouping]-implementation.md` file with detailed instructions for importing, configuring, and integrating the code into a user's project. This ensures all exportable code is easy to adopt and productionize. 