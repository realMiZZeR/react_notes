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
  private _data: IUserData;
  constructor() {
    this._data = {...DefaultUser};
    makeObservable(this);
  }

  get data() {
    return this._data;
  }

  set data(value: IUserData) {
    this._data = value;
  }

  /**
   * Полностью стирает данные о пользователя из хранилища.
   */
  clear() {
    this._data = DefaultUser;
  }
}
