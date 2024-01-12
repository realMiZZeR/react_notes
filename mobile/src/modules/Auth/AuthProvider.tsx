import React, {createContext, PropsWithChildren, useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react';
import {UserStore} from '../User/UserStore.ts';
import {IAuthParams} from 'modules/Auth/interfaces/IAuthParams.ts';
import {NavigationProp} from 'modules/ScreenNavigtation/NavigationProp.ts';
import {signUp} from './scripts/signUp.ts';
import {signIn} from 'modules/Auth/scripts/signIn.ts';
import {signOut} from './scripts/signOut.ts';

interface IAuthContext {
  user: UserStore;
  signIn: (params: IAuthParams) => Promise<boolean>;
  signUp: (params: IAuthParams) => Promise<boolean>;
  signOut: () => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = observer((props: PropsWithChildren) => {
  const navigation = useNavigation<NavigationProp>();

  const userStore: UserStore = new UserStore();

  // Подписка на авторизацию из firebase.
  useEffect(() => {
    const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
      userStore.data = user;

      if (user !== null) {
        navigation.navigate('Notes');
      }
    };

    const authSubscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return () => authSubscriber();
  });

  const value = {user: userStore, signIn, signUp, signOut};

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
});
