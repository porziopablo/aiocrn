// vendors
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// types
import { FavoritesNavigation } from '@src/types/enums/navigation.enums';

function EmptyScreen(): JSX.Element {
  return <></>;
}

function FavoritesStackNavigator(): JSX.Element {
  const FavoritesNavigator = createNativeStackNavigator();

  return (
    <FavoritesNavigator.Navigator>
      <FavoritesNavigator.Screen name={FavoritesNavigation.All} component={EmptyScreen} />
      <FavoritesNavigator.Screen name={FavoritesNavigation.Detail} component={EmptyScreen} />
    </FavoritesNavigator.Navigator>
  );
}

export default FavoritesStackNavigator;
