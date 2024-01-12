import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {IconInput} from 'components/IconInput.tsx';
import {IconButton} from 'components/IconButton.tsx';
import {useAuth} from './hooks/useAuth.ts';
import {useNotifications} from '../Notification/NotificationsProvider.tsx';
import {INotificationMessage} from '../Notification/interfaces/INotificationMessage.ts';
import {Icons} from 'icons/Icons.ts';
import {IAuthParams} from 'modules/Auth/interfaces/IAuthParams.ts';

interface IAuthForm {}

/**
 * Форма для авторизации пользователя.
 * @constructor
 */
export const AuthForm = ({}: IAuthForm) => {
  const {signIn, signUp} = useAuth();
  const {store: notificationStore} = useNotifications();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Принимает параметром функцию для авторизации или регистрации.
  const handleFormButton = async (
    fn: (params: IAuthParams) => Promise<boolean>,
  ) => {
    const params: IAuthParams = {email, password};
    const success: boolean = await fn(params);

    if (success) {
      setEmail('');
      setPassword('');
      return;
    }

    const notificationMessage: INotificationMessage = {
      text: 'Incorrect email or password.',
      type: 'alarm',
    };
    notificationStore.add(notificationMessage);
  };

  return (
    <View style={styles.container}>
      <IconInput
        icon={<Icons.User size={18} fill={'#CAD0E4'} />}
        text={email}
        placeholder={'E-mail'}
        onChangeText={setEmail}
      />
      <IconInput
        icon={<Icons.Lock size={18} strokeColor={'#CAD0E4'} strokeWidth={2} />}
        text={password}
        placeholder={'Пароль'}
        onChangeText={setPassword}
        isPassword={true}
      />
      <View style={styles.actions}>
        <IconButton
          icon={
            <Icons.UserAdd size={20} strokeWidth={2} strokeColor={'#F9F9F9'} />
          }
          text={'Регистрация'}
          onPress={() => handleFormButton(signUp)}
          style={{
            button: styles.signUpButton,
          }}
        />
        <IconButton
          icon={
            <Icons.Enter size={20} strokeWidth={2} strokeColor={'#F9F9F9'} />
          }
          text={'Войти'}
          onPress={() => handleFormButton(signIn)}
          style={{
            button: styles.signInButton,
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    gap: 8,
    paddingHorizontal: 25,
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 16,
  },
  signUpButton: {},
  signInButton: {},
});
