import {action, makeObservable, observable, runInAction} from 'mobx';
import {INotificationMessage} from './interfaces/INotificationMessage.ts';

class NotificationStore {
  public messages: INotificationMessage[];
  private readonly _disappearDelay: number;
  constructor(disappearDelay = 3000) {
    this.messages = [];
    this._disappearDelay = disappearDelay;
    makeObservable(this, {
      messages: observable,
      add: action,
      remove: action,
    });
  }

  add(notificationMessage: INotificationMessage) {
    if (!notificationMessage.id) {
      notificationMessage.id = Date.now().toString();
    }

    this.messages.push(notificationMessage);
    this.disappearAfterDelay(notificationMessage);
  }

  remove(message: INotificationMessage) {
    this.messages = this.messages.filter(item => item.id !== message.id);
  }

  private disappearAfterDelay(message: INotificationMessage) {
    setTimeout(() => {
      this.remove(message);
    }, this._disappearDelay);
  }
}

export {NotificationStore};
