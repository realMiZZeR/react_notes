import {makeObservable} from 'mobx';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

/**
 * Хранилище данных пользователя. Используется в модуле авторизации.
 */
export class UserStore {
  private _data: FirebaseAuthTypes.User | null;

  constructor() {
    this._data = null;
    makeObservable(this);
  }

  get data(): FirebaseAuthTypes.User | null {
    return this._data;
  }

  set data(value: FirebaseAuthTypes.User | null) {
    this._data = value;
  }

  clear() {
    this._data = null;
  }
}
