// vendors
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// components
import TabNavigator from './src/navigation';
import ThemeContext from './src/context/ThemeContext/Theme.context';
import { persistor, store } from './src/store';

function App(): JSX.Element {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <ThemeContext>
          <NavigationContainer>
            <TabNavigator />
          </NavigationContainer>
        </ThemeContext>
      </Provider>
    </PersistGate>
  );
}

export default App;
