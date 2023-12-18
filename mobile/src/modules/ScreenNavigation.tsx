import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {AuthScreen} from '../screens/AuthScreen.tsx';
import {StyleSheet} from 'react-native';
import {NotesScreen} from '../screens/NotesScreen.tsx';

const Stack = createNativeStackNavigator();

/**
 * Компонент для навигации между экранами.
 * @constructor
 */
export const ScreenNavigation = () => {
  const screenOptions: NativeStackNavigationOptions = {
    contentStyle: styles.container,
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Auth'} screenOptions={screenOptions}>
        <Stack.Screen name={'Auth'} component={AuthScreen} />
        <Stack.Screen name={'Notes'} component={NotesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 10,
    backgroundColor: '#0F0A21',
  },
});
