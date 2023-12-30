// vendors
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// components
import TabNavigator from './src/navigation';

console.log('App.tsx');

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
