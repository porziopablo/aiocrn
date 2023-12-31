// vendors
import { NativeModules } from 'react-native';
import { type Double } from 'react-native/Libraries/Types/CodegenTypes';

const { CalendarModule } = NativeModules;

interface NativeEvent {
  title: string;
  startDate: Double;
  endDate: Double;
}

export async function fetchCalendarEvents(): Promise<NativeEvent[]> {
  let events: NativeEvent[] = [];
  try {
    events = await CalendarModule?.fetchEvents();
  } catch (error) {
    console.error(error);
  }
  return events;
}

export async function addCalendarEvent(event: NativeEvent): Promise<void> {
  try {
    await CalendarModule?.addEvent(event.title, event.startDate, event.endDate);
  } catch (error) {
    console.error(error);
  }
}
