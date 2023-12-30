// vendors
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// types
import { TabNavigation } from '../types/enums/navigation.enums';

// navigators
import EventsStackNavigator from './stackNavigators/EventsStack.navigator';
import FavoritesStackNavigator from './stackNavigators/FavoritesStack.navigator';
import MoreStackNavigator from './stackNavigators/MoreStack.navigator';

function TabNavigator(): JSX.Element {
  const TabNavigator = createBottomTabNavigator();

  return (
    <TabNavigator.Navigator screenOptions={{ headerShown: false }}>
      <TabNavigator.Screen name={TabNavigation.Events} component={EventsStackNavigator} />
      <TabNavigator.Screen name={TabNavigation.Favorites} component={FavoritesStackNavigator} />
      <TabNavigator.Screen name={TabNavigation.More} component={MoreStackNavigator} />
    </TabNavigator.Navigator>
  );
}

export default TabNavigator;
