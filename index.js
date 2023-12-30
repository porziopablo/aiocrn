// vendors
import { AppRegistry } from 'react-native';

// components
import App from './App';

// config
import { name as appName } from './app.json';
import './src/locales';

AppRegistry.registerComponent(appName, () => App);
