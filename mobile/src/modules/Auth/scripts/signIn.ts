import {ISignInParams} from '../interfaces/ISignInParams.ts';
import {UserStore} from '../../User/UserStore.ts';

/**
 * Сначала инициализируется хранилище пользователя, после его логин и пароль для авторизации.
 * @param user Хранилище пользователя.
 */
export const signIn = (user: UserStore) => {
  return async function (params: ISignInParams) {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      user.data = {id: '1', token: '1f', login: params.login};
      return true;
    } catch {
      return false;
    }
  };
};
