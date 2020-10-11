import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HomeScreen } from "./screens/HomeScreen";
import { QuizScreen } from "./screens/QuizeScreen";
import { ConfigGameScreen } from "./screens/ConfigGameScreen";

import { store } from "./store/reducers";
const Stack = createStackNavigator();

export default function App() {
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
                name="ziuQ"
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
