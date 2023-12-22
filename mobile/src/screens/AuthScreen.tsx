import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Logo} from '../components/Logo.tsx';
import {AuthForm} from '../modules/Auth/AuthForm.tsx';
import {NavigationProp} from '@react-navigation/native';

interface IAuthScreen {
  navigation: NavigationProp<any>;
}

/**
 * Начальный экран для авторизации.
 * @constructor
 */
export const AuthScreen = ({navigation}: IAuthScreen) => {
  const handleAuthFormSubmit = () => {
    navigation.navigate('Notes');
  };

  return (
    <View style={styles.container}>
      <Logo size={'large'} containerStyle={styles.logo} />
      <AuthForm onSubmit={handleAuthFormSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 24,
  },
});
