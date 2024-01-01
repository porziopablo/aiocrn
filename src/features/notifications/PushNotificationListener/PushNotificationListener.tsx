// vendors
import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import {
  type Notification,
  type NotificationCompletion,
  type Registered,
  Notifications,
} from 'react-native-notifications';
import { useNavigation } from '@react-navigation/native';

// types
import type {
  EventDayReminderNotification,
  BaseNotification,
} from '../../../types/responses/notifications.responses';
import { EventsNavigation, TabNavigation } from '../../../types/enums/navigation.enums';
import { NotificationType } from '../../../types/enums/notifications.enums';

function PushNotificationListener(): JSX.Element {
  const { navigate } = useNavigation();

  function handleEventReminderNotification(notification: EventDayReminderNotification): void {
    navigate(TabNavigation.Events, {
      screen: EventsNavigation.Detail,
      params: { eventId: notification.eventId },
    });
  }

  // handles notification opened when app is in background or closed, for android check handleInitialNotificationAndroid()
  function handleOpenedNotification(notification: Notification, completion: () => void): void {
    const payload: BaseNotification = notification.payload;

    switch (payload.type) {
      case NotificationType.EventDayReminder:
        handleEventReminderNotification(payload as EventDayReminderNotification);
        break;
      default:
        break;
    }
    completion();
  }

  /**
   * According to https://wix.github.io/react-native-notifications/api/general-events#registernotificationopened,
   * `registerNotificationOpened()` will be called before component is mounted, so to get the initial notification
   * `getInitialNotification()` should be called on mount.
   */
  async function handleInitialNotificationAndroid(): Promise<void> {
    console.log('handleInitialNotificationAndroid', Platform.OS);
    if (Platform.OS !== 'android') return;

    try {
      const notification = await Notifications.getInitialNotification();
      if (notification) handleOpenedNotification(notification, () => {});
    } catch (error) {
      console.error(error);
    }
  }

  // handles notification when app is in foreground
  function handleNotification(
    notification: Notification,
    completion: (response: NotificationCompletion) => void,
  ): void {
    const payload: BaseNotification = notification.payload;

    switch (payload.type) {
      default:
        completion({ alert: true });
        break;
    }
  }

  function initNotifications(): () => void {
    Notifications.registerRemoteNotifications();
    Notifications.events().registerRemoteNotificationsRegistered((event: Registered) => {
      // eslint-disable-next-line no-console
      console.log(
        'Sending token to own server to subscribe to push notifications',
        event.deviceToken,
      );
    });
    // Notifications.events().registerRemoteNotificationsRegistrationFailed(console.error);

    const foregroundSubscription =
      Notifications.events().registerNotificationReceivedForeground(handleNotification);

    const notificationOpenedSubscription =
      Notifications.events().registerNotificationOpened(handleOpenedNotification);

    return () => {
      foregroundSubscription.remove();
      notificationOpenedSubscription.remove();
    };
  }

  useEffect(initNotifications, []);
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    handleInitialNotificationAndroid();
  }, [Platform.OS]);

  return <></>;
}

export default PushNotificationListener;
