// vendors
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// types
import { EventsNavigation } from '../../types/enums/navigation.enums';

// screens
import AllEventsScreen from '../../screens/events/AllEvents/AllEvents.screen';
import EventDetailScreen from '../../screens/events/EventDetail/EventDetail.container';
import NotFoundScreen from '../../screens/events/NotFound/NotFound.screen';

function EventsStackNavigator(): JSX.Element {
  const EventsNavigator = createNativeStackNavigator();

  return (
    <EventsNavigator.Navigator screenOptions={{ headerShown: false }}>
      <EventsNavigator.Screen name={EventsNavigation.All} component={AllEventsScreen} />
      <EventsNavigator.Screen name={EventsNavigation.Detail} component={EventDetailScreen} />
      <EventsNavigator.Screen name={EventsNavigation.NotFound} component={NotFoundScreen} />
    </EventsNavigator.Navigator>
  );
}

export default EventsStackNavigator;
