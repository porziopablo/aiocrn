// vendors
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// types
import { MoreNavigation } from '../../types/enums/navigation.enums';

function EmptyScreen(): JSX.Element {
  return <></>;
}

function MoreStackNavigator(): JSX.Element {
  const MoreNavigator = createNativeStackNavigator();

  return (
    <MoreNavigator.Navigator>
      <MoreNavigator.Screen name={MoreNavigation.Settings} component={EmptyScreen} />
      <MoreNavigator.Screen name={MoreNavigation.About} component={EmptyScreen} />
    </MoreNavigator.Navigator>
  );
}

export default MoreStackNavigator;
