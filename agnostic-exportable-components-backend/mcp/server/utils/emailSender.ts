// Utility for sending email notifications

export async function sendEmail(userId: string, message: string, context?: string): Promise<void> {
  // TODO: Integrate with real email provider (e.g., Nodemailer, SendGrid)
  // Lookup user email by userId, format message, send email
  console.log(`[EMAIL] To user ${userId}: ${message} (context: ${context})`);
  return Promise.resolve();
} 