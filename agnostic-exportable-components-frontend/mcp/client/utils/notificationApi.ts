import axios from 'axios';
import type { NotificationItem } from '../components/NotificationInbox';

/**
 * Fetch notifications from the backend MCP notification API.
 * @returns {Promise<NotificationItem[]>}
 */
export async function fetchNotifications(): Promise<NotificationItem[]> {
  const res = await axios.get('/api/notifications');
  return res.data;
}

/**
 * Mark a notification as read by ID.
 * @param {string} id - Notification ID
 */
export async function markNotificationAsRead(id: string): Promise<void> {
  await axios.post(`/api/notifications/${id}/read`);
} 