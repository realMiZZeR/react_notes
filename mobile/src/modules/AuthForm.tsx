import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {IconInput} from '../components/IconInput.tsx';
import UserIcon from '../assets/icons/UserIcon/UserIcon.tsx';
import {IconButton} from '../components/IconButton.tsx';
import EnterIcon from '../assets/icons/EnterIcon/EnterIcon.tsx';
import LockIcon from '../assets/icons/LockIcon/LockIcon.tsx';

interface IAuthForm {
  onSubmit?: () => void;
}

/**
 * Форма для авторизации пользователя.
 * @constructor
 */
export const AuthForm = ({onSubmit}: IAuthForm) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleButtonPress = () => {
    console.log(login);
    onSubmit?.();
  };

  return (
    <View style={styles.container}>
      <IconInput
        icon={<UserIcon parentWidth={18} parentHeight={18} fill={'#CAD0E4'} />}
        text={login}
        placeholder={'Логин'}
        onChangeText={setLogin}
      />
      <IconInput
        icon={
          <LockIcon
            parentWidth={18}
            parentHeight={18}
            strokeColor={'#CAD0E4'}
            strokeWidth={2}
          />
        }
        text={password}
        placeholder={'Пароль'}
        onChangeText={setPassword}
        isPassword={true}
      />
      <IconButton
        icon={
          <EnterIcon
            parentWidth={18}
            parentHeight={18}
            strokeWidth={2}
            strokeColor={'#F9F9F9'}
          />
        }
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
    marginLeft: 'auto',
  },
});
