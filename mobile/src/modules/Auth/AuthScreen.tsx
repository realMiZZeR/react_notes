import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Logo} from 'components/Logo.tsx';
import {AuthForm} from './AuthForm.tsx';

interface IAuthScreen {}

/**
 * Начальный экран для авторизации.
 * @constructor
 */
export const AuthScreen = ({}: IAuthScreen) => {
  return (
    <View style={styles.container}>
      <Logo size={'large'} containerStyle={styles.logo} />
      <AuthForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 24,
  },
});
