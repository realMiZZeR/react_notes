import React, {createContext, PropsWithChildren} from 'react';
import {signIn} from './scripts/signIn.ts';
import {signUp} from './scripts/signUp.ts';
import {exit} from './scripts/exit.ts';
import {ISignInParams} from './interfaces/ISignInParams.ts';
import {observer} from 'mobx-react';
import {UserStore} from '../User/UserStore.ts';

interface IAuthContext {
  user: UserStore;
  authorize: (params: ISignInParams) => Promise<boolean>;
  register: () => void;
  exit: () => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = observer((props: PropsWithChildren) => {
  const user: UserStore = new UserStore();
  const authorize = signIn(user);
  const register = signUp;

  const value = {user, authorize, register, exit};

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
});
