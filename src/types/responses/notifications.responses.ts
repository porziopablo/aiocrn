import { type NotificationType } from '../enums/notifications.enums';

export interface BaseNotification {
  id: string;
  type: NotificationType;
  createdAt: Date;
}

export interface EventDayReminderNotification extends BaseNotification {
  eventId: string;
  eventTitle: string;
  startTime: string;
}
