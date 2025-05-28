// Utility for sending in-app notifications

export async function sendInApp(userId: string, message: string, context?: string): Promise<void> {
  // TODO: Integrate with real in-app notification system (e.g., push to user socket, DB, etc.)
  console.log(`[IN-APP] To user ${userId}: ${message} (context: ${context})`);
  return Promise.resolve();
} 