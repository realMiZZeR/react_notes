import {ISignInParams} from '../interfaces/ISignInParams.ts';
import {UserStore} from '../../User/UserStore.ts';
import {IUserData} from '../../User/IUserData.ts';
import {delay} from '../../../helpers/delay.ts';

const users: Array<IUserData & {password: string}> = [
  {id: '1', token: '', login: 'aboba', password: '123'},
];

/**
 * Сначала инициализируется хранилище пользователя, после его логин и пароль для авторизации.
 * @param user Хранилище пользователя.
 */
export const signIn = (user: UserStore) => {
  return async function (params: ISignInParams) {
    try {
      let foundUser;
      await delay(() => {
        const pureLogin = params.login.trim().toLowerCase();
        const purePassword = params.password.trim();

        foundUser = users.find(
          userDb =>
            userDb.login === pureLogin && userDb.password === purePassword,
        );
      }, 500);

      if (foundUser) {
        user.data = foundUser;
        return true;
      }

      console.error('user not found');
      return false;
    } catch (err) {
      console.error(err);
      return false;
    }
  };
};
