import { NotificationImportance } from '../models/Notification';
import { UserPreference, NotificationChannel } from '../models/UserPreference';

// Determines which channels to use based on importance, context, and user preferences
export function routeNotification(
  importance: NotificationImportance,
  context: string,
  userPref: UserPreference
): NotificationChannel[] {
  const channels: NotificationChannel[] = [];
  // High importance: always send SMS (if user allows), plus email/in-app
  if (importance === 'high') {
    if (userPref.preferredChannels.includes('sms')) channels.push('sms');
    if (userPref.preferredChannels.includes('email')) channels.push('email');
    if (userPref.preferredChannels.includes('in-app')) channels.push('in-app');
  } else if (importance === 'normal') {
    // Normal: email and in-app if user allows
    if (userPref.preferredChannels.includes('email')) channels.push('email');
    if (userPref.preferredChannels.includes('in-app')) channels.push('in-app');
  } else {
    // Low: in-app only unless user prefers more
    if (userPref.preferredChannels.includes('in-app')) channels.push('in-app');
    // Optionally, allow user to opt-in to email/SMS for low importance
    if (userPref.preferredChannels.includes('email') && context === 'opt-in') channels.push('email');
    if (userPref.preferredChannels.includes('sms') && context === 'opt-in') channels.push('sms');
  }
  return channels;
} 