import React from 'react';

export interface NotificationItem {
  id: string;
  message: string;
  createdAt: string;
  read: boolean;
}

/**
 * NotificationInbox component displays a list of notifications in a panel.
 * @param {NotificationItem[]} notifications - List of notifications.
 * @param {(id: string) => void} onMarkAsRead - Callback to mark a notification as read.
 * @param {() => void} onClose - Callback to close the inbox panel.
 */
export function NotificationInbox({ notifications, onMarkAsRead, onClose }: {
  notifications: NotificationItem[];
  onMarkAsRead: (id: string) => void;
  onClose: () => void;
}) {
  return (
    <div className="fixed top-16 right-4 w-80 max-h-[70vh] bg-white shadow-lg rounded-lg border border-gray-200 z-40 flex flex-col">
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-100">
        <h2 className="text-lg font-semibold">Notifications</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
      </div>
      <div className="flex-1 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="p-4 text-gray-500 text-center">No notifications</div>
        ) : (
          <ul>
            {notifications.map((n) => (
              <li key={n.id} className={`flex items-start px-4 py-2 border-b border-gray-50 ${n.read ? 'bg-gray-50' : 'bg-blue-50'}`}>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-800">{n.message}</div>
                  <div className="text-xs text-gray-400">{new Date(n.createdAt).toLocaleString()}</div>
                </div>
                {!n.read && (
                  <button
                    onClick={() => onMarkAsRead(n.id)}
                    className="ml-2 px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
                  >Mark as read</button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
} 