// vendors
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// components
import TabNavigator from '@src/navigation';
import ThemeContext from '@src/context/ThemeContext/Theme.context';

function App(): JSX.Element {
  return (
    <ThemeContext>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </ThemeContext>
  );
}

export default App;
