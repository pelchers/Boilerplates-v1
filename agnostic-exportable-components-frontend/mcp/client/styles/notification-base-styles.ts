// TailwindCSS base styles for notification UI

export const notificationBaseStyles = {
  // Bell icon button
  bellButton: 'relative p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500',
  // Unread badge
  unreadBadge: 'absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2',
  // Toast
  toast: 'fixed bottom-4 right-4 z-50 flex items-center px-4 py-2 text-white rounded shadow-lg',
  // Inbox panel
  inboxPanel: 'fixed top-16 right-4 w-80 max-h-[70vh] bg-white shadow-lg rounded-lg border border-gray-200 z-40 flex flex-col',
  // Inbox notification item
  inboxItem: 'flex items-start px-4 py-2 border-b border-gray-50',
  // Mark as read button
  markAsReadButton: 'ml-2 px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600',
}; 