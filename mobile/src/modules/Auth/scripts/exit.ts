import {user} from '../../User/UserStore.ts';

export const exit = () => {
  user.clear();
};
