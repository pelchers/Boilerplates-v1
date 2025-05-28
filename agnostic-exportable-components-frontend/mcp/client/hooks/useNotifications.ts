import { useState, useEffect, useCallback } from 'react';
import { fetchNotifications, markNotificationAsRead } from '../utils/notificationApi';
import type { NotificationItem } from '../components/NotificationInbox';

/**
 * useNotifications hook manages notification state and logic.
 * Fetches notifications, provides unread count, and mark-as-read functionality.
 */
export function useNotifications() {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [loading, setLoading] = useState(false);

  const loadNotifications = useCallback(async () => {
    setLoading(true);
    const data = await fetchNotifications();
    setNotifications(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadNotifications();
    // Optionally, set up polling or websocket for real-time updates
    // const interval = setInterval(loadNotifications, 30000);
    // return () => clearInterval(interval);
  }, [loadNotifications]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAsRead = async (id: string) => {
    await markNotificationAsRead(id);
    setNotifications((prev) => prev.map((n) => n.id === id ? { ...n, read: true } : n));
  };

  return {
    notifications,
    unreadCount,
    loading,
    markAsRead,
    reload: loadNotifications,
  };
} 