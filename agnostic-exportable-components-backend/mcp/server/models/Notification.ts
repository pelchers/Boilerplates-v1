export type NotificationImportance = 'low' | 'normal' | 'high';

export interface NotificationProps {
  userId: string;
  message: string;
  importance: NotificationImportance;
  context?: string;
  createdAt: Date;
}

export class Notification {
  userId: string;
  message: string;
  importance: NotificationImportance;
  context?: string;
  createdAt: Date;

  constructor(props: NotificationProps) {
    this.userId = props.userId;
    this.message = props.message;
    this.importance = props.importance;
    this.context = props.context;
    this.createdAt = props.createdAt;
  }

  // Stub: Replace with real DB save logic
  async save(): Promise<void> {
    // Save notification to database
    return Promise.resolve();
  }
} 