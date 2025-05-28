import { Request, Response } from 'express';
import { Notification } from '../models/Notification';
import { UserPreference } from '../models/UserPreference';
import { routeNotification } from '../utils/notificationRouter';
import { sendEmail } from '../utils/emailSender';
import { sendSMS } from '../utils/smsSender';
import { sendInApp } from '../utils/inAppNotifier';

// Handles POST /notifications
export async function createNotification(req: Request, res: Response) {
  try {
    const { userId, message, importance, context } = req.body;
    // Fetch user preferences (stub: replace with real DB call)
    const userPref: UserPreference = await UserPreference.getByUserId(userId);
    // Create notification object
    const notification: Notification = new Notification({
      userId,
      message,
      importance,
      context,
      createdAt: new Date(),
    });
    // Determine channels
    const channels = routeNotification(importance, context, userPref);
    // Send via each channel
    if (channels.includes('email')) {
      await sendEmail(userId, message, context);
    }
    if (channels.includes('sms')) {
      await sendSMS(userId, message, context);
    }
    if (channels.includes('in-app')) {
      await sendInApp(userId, message, context);
    }
    // Save notification (stub: replace with real DB call)
    await notification.save();
    res.status(201).json({ success: true, channels });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
} 