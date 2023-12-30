// vendors
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// types
import { EventsNavigation } from '../../types/enums/navigation.enums';

function EmptyScreen(): JSX.Element {
  return <></>;
}

function EventsStackNavigator(): JSX.Element {
  const EventsNavigator = createNativeStackNavigator();

  return (
    <EventsNavigator.Navigator>
      <EventsNavigator.Screen name={EventsNavigation.All} component={EmptyScreen} />
      <EventsNavigator.Screen name={EventsNavigation.Detail} component={EmptyScreen} />
    </EventsNavigator.Navigator>
  );
}

export default EventsStackNavigator;
