import {makeObservable} from 'mobx';
import {IUserData} from './IUserData.ts';

// Объект пустышка для пользователя.
const DefaultUser: IUserData = {
  id: '',
  token: '',
  login: '',
};

/**
 * Хранилище данных пользователя. Используется в модуле авторизации.
 */
export class UserStore {
  private _data: IUserData | null;
  constructor() {
    this._data = {...DefaultUser};
    makeObservable(this);
  }

  get data(): IUserData | null {
    return this._data;
  }

  set data(value: IUserData | null) {
    if (value === null) {
      console.log('set data value is null in user store');
      return;
    }

    this._data = value;
  }

  /**
   * Полностью стирает данные о пользователя из хранилища.
   */
  clear() {
    console.log('user data cleared');
    this._data = null;
  }
}
