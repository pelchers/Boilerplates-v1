import React from 'react';

/**
 * NotificationBell component displays a bell icon with an unread count badge.
 * @param {number} unreadCount - Number of unread notifications.
 * @param {() => void} onClick - Callback when the bell is clicked.
 */
export function NotificationBell({ unreadCount, onClick }: {
  unreadCount: number;
  onClick: () => void;
}) {
  return (
    <button
      className="relative p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Notifications"
      onClick={onClick}
    >
      {/* Bell Icon */}
      <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
      {/* Unread Badge */}
      {unreadCount > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
          {unreadCount}
        </span>
      )}
    </button>
  );
} 