// vendors
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// types
import { FavoritesNavigation } from '../../types/enums/navigation.enums';

// screens
import AllFavoriteEventsScreen from '../../screens/events/AllFavoritesEvents/AllFavoriteEvents.screen';

function FavoritesStackNavigator(): JSX.Element {
  const FavoritesNavigator = createNativeStackNavigator();

  return (
    <FavoritesNavigator.Navigator screenOptions={{ headerShown: false }}>
      <FavoritesNavigator.Screen
        name={FavoritesNavigation.All}
        component={AllFavoriteEventsScreen}
      />
    </FavoritesNavigator.Navigator>
  );
}

export default FavoritesStackNavigator;
