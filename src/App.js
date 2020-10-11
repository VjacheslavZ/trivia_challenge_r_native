import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import { HomeScreen } from "./screens/HomeScreen";
import { QuizScreen } from "./screens/QuizeScreen";
import { ConfigGameScreen } from "./screens/ConfigGameScreen";

import { store } from "./store/reducers";

const Stack = createStackNavigator();

export default function App() {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    async function fetchFonts() {
      await Font.loadAsync({
        Roboto: require('native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        ...Ionicons.font,
      })
      setReady(true)
    }
    fetchFonts()
  }, []);

  if (!isReady) {
    return <AppLoading/>
  }

  return (
    <React.Fragment>
      <Provider store={store}>
        <NavigationContainer >
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: 'Home screen' }}
            />
            <Stack.Screen
              name="ConfigScreen"
              component={ConfigGameScreen}
              options={{ title: 'Configure game' }}
            />
            <Stack.Screen
              name="Quiz"
              component={QuizScreen}
              options={{ title: '' }}
            />
          </Stack.Navigator>

          <StatusBar style="dark" />
        </NavigationContainer>
      </Provider>
    </React.Fragment>
  );
}
