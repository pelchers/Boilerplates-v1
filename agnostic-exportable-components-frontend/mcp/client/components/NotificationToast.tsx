import React from 'react';

/**
 * NotificationToast component displays a toast popup for notifications.
 * @param {string} message - The notification message.
 * @param {() => void} onClose - Callback to close the toast.
 * @param {'info' | 'success' | 'error'} [type] - Type of notification for styling.
 */
export function NotificationToast({ message, onClose, type = 'info' }: {
  message: string;
  onClose: () => void;
  type?: 'info' | 'success' | 'error';
}) {
  const typeStyles = {
    info: 'bg-blue-500',
    success: 'bg-green-500',
    error: 'bg-red-500',
  };
  return (
    <div className={`fixed bottom-4 right-4 z-50 flex items-center px-4 py-2 text-white rounded shadow-lg ${typeStyles[type]}`}
      role="alert"
    >
      <span className="mr-2">{message}</span>
      <button onClick={onClose} className="ml-2 text-white hover:text-gray-200 focus:outline-none">&times;</button>
    </div>
  );
} 