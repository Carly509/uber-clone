import React from 'react';
import {KeyboardAvoidingView } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import store from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MapScreen from './screens/MapScreen';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : height}
            keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
          >
            <Stack.Navigator>
              <Stack.Screen 
                name="HomeScreen"
                component={HomeScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen 
                name="MapScreen"
                component={MapScreen}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </Provider>
    </NavigationContainer>
  );
}