// vendors
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

// components
import TabNavigator from './src/navigation';
import ThemeContext from './src/context/ThemeContext/Theme.context';
import { store } from './src/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ThemeContext>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </ThemeContext>
    </Provider>
  );
}

export default App;
