// vendors
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';

// components
import TabNavigator from './src/navigation';
import ThemeContext from './src/context/ThemeContext/Theme.context';
import { persistor, store } from './src/store';
import PushNotificationListener from './src/features/notifications/PushNotificationListener/PushNotificationListener';
import ToastInstance from './src/components/Toast/Toast';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <ThemeContext>
          <NavigationContainer>
            <PushNotificationListener />
            <TabNavigator />
            <ToastInstance />
          </NavigationContainer>
        </ThemeContext>
      </Provider>
    </PersistGate>
  );
}

export default App;
