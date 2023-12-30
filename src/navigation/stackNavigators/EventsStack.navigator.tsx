// vendors
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// types
import { EventsNavigation } from '../../types/enums/navigation.enums';

// screens
import AllEventsScreen from '../../screens/events/AllEvents/AllEvents.screen';

function EventsStackNavigator(): JSX.Element {
  const EventsNavigator = createNativeStackNavigator();

  return (
    <EventsNavigator.Navigator screenOptions={{ headerShown: false }}>
      <EventsNavigator.Screen name={EventsNavigation.All} component={AllEventsScreen} />
    </EventsNavigator.Navigator>
  );
}

export default EventsStackNavigator;
