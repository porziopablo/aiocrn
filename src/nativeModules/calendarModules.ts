// vendors
import { NativeModules } from 'react-native';
import { type Double } from 'react-native/Libraries/Types/CodegenTypes';
import i18n from '../locales';

// components
import { showToast } from '../components/Toast/Toast';

const { CalendarModule } = NativeModules;

interface NativeEvent {
  title: string;
  startDate: Double;
  endDate: Double;
}

export async function addCalendarEvent(event: NativeEvent): Promise<void> {
  try {
    await CalendarModule?.addEvent?.(event.title, event.startDate, event.endDate);
    showToast({
      type: 'success',
      description: i18n.t('calendar.saveEvent.success'),
    });
  } catch (error) {
    console.error(error);
    showToast({
      type: 'error',
      description: i18n.t('calendar.saveEvent.error'),
    });
  }
}
