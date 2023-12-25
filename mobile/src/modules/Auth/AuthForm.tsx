import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {IconInput} from '../../components/IconInput.tsx';
import UserIcon from '../../assets/icons/UserIcon/UserIcon.tsx';
import {IconButton} from '../../components/IconButton.tsx';
import EnterIcon from '../../assets/icons/EnterIcon/EnterIcon.tsx';
import LockIcon from '../../assets/icons/LockIcon/LockIcon.tsx';
import {useAuth} from './hooks/useAuth.ts';
import {ISignInParams} from './interfaces/ISignInParams.ts';
import {useNotifications} from '../Notification/NotificationsProvider.tsx';
import {INotificationMessage} from '../Notification/interfaces/INotificationMessage.ts';

interface IAuthForm {
  onSubmit?: () => void;
}

/**
 * Форма для авторизации пользователя.
 * @constructor
 */
export const AuthForm = ({onSubmit}: IAuthForm) => {
  const {authorize} = useAuth();
  const {store: notificationStore} = useNotifications();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleButtonPress = async () => {
    const params: ISignInParams = {
      login: login,
      password: password,
    };

    const success: boolean = await authorize(params);

    if (success) {
      onSubmit?.();
      return;
    }

    const notificationMessage: INotificationMessage = {
      text: 'Incorrect login or password.',
      type: 'alarm',
    };
    notificationStore.add(notificationMessage);
  };

  return (
    <View style={styles.container}>
      <IconInput
        icon={<UserIcon size={18} fill={'#CAD0E4'} />}
        text={login}
        placeholder={'Логин'}
        onChangeText={setLogin}
      />
      <IconInput
        icon={<LockIcon size={18} strokeColor={'#CAD0E4'} strokeWidth={2} />}
        text={password}
        placeholder={'Пароль'}
        onChangeText={setPassword}
        isPassword={true}
      />
      <IconButton
        icon={<EnterIcon size={18} strokeWidth={2} strokeColor={'#F9F9F9'} />}
        text={'Войти'}
        onPress={handleButtonPress}
        parentStyle={styles.submitButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
    width: '100%',
    paddingHorizontal: 25,
  },
  submitButton: {
    width: 100,
    marginLeft: 'auto',
  },
});
