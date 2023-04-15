import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import { HomePage } from './src/page/HomePage';
import { Details } from './src/page/Datail';

import {store} from './store';
import { Bookmarks } from './src/page/Bookmarks';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Bookmarks" component={Bookmarks} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

