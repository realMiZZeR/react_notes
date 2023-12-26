import {UserStore} from '../../User/UserStore.ts';

export const exit = (user: UserStore) => {
  return () => {
    user.clear();
  };
};
