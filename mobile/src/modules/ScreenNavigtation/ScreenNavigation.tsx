import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {AuthScreen} from '../Auth/AuthScreen.tsx';
import {StyleSheet} from 'react-native';
import {NotesScreen} from '../Notes/NotesScreen.tsx';
import {AuthProvider} from 'modules/Auth/AuthProvider.tsx';

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
      <AuthProvider>
        <Stack.Navigator
          initialRouteName={'Auth'}
          screenOptions={screenOptions}>
          <Stack.Screen name={'Auth'} component={AuthScreen} />
          <Stack.Screen name={'Notes'} component={NotesScreen} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#0F0A21',
  },
});
