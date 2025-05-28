// Utility for sending SMS notifications

export async function sendSMS(userId: string, message: string, context?: string): Promise<void> {
  // TODO: Integrate with real SMS provider (e.g., Twilio)
  // Lookup user phone number by userId, format message, send SMS
  console.log(`[SMS] To user ${userId}: ${message} (context: ${context})`);
  return Promise.resolve();
} 