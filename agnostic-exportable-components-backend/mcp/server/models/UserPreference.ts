export type NotificationChannel = 'email' | 'sms' | 'in-app';

export interface UserPreferenceProps {
  userId: string;
  preferredChannels: NotificationChannel[];
}

export class UserPreference {
  userId: string;
  preferredChannels: NotificationChannel[];

  constructor(props: UserPreferenceProps) {
    this.userId = props.userId;
    this.preferredChannels = props.preferredChannels;
  }

  // Stub: Replace with real DB lookup
  static async getByUserId(userId: string): Promise<UserPreference> {
    // Example: default to all channels
    return new UserPreference({
      userId,
      preferredChannels: ['email', 'sms', 'in-app'],
    });
  }
} 