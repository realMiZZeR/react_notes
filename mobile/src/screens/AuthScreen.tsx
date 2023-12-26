import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Logo} from '../components/Logo.tsx';
import {AuthForm} from '../modules/Auth/AuthForm.tsx';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../modules/ScreenNavigtation/RootStackParamList.ts';

interface IAuthScreen {}

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

/**
 * Начальный экран для авторизации.
 * @constructor
 */
export const AuthScreen = ({}: IAuthScreen) => {
  const navigation = useNavigation<NavigationProp>();

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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: 24,
  },
});
