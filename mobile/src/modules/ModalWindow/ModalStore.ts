import {ReactElement} from 'react';
import {action, makeObservable, observable} from 'mobx';

class ModalStore {
  public currentModal: ReactElement<any> | null;

  constructor() {
    this.currentModal = null;
    makeObservable(this, {
      currentModal: observable,
      setModal: action,
      close: action,
    });
  }

  setModal(modal: ReactElement) {
    this.currentModal = modal;
  }

  close() {
    this.currentModal = null;
  }
}

export {ModalStore};
