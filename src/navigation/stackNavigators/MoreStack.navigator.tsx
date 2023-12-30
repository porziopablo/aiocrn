// vendors
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// types
import { MoreNavigation } from '../../types/enums/navigation.enums';

// screens
import MoreScreen from '../../screens/other/More/More.screen';

function MoreStackNavigator(): JSX.Element {
  const MoreNavigator = createNativeStackNavigator();

  return (
    <MoreNavigator.Navigator screenOptions={{ headerShown: false }}>
      <MoreNavigator.Screen name={MoreNavigation.More} component={MoreScreen} />
    </MoreNavigator.Navigator>
  );
}

export default MoreStackNavigator;
