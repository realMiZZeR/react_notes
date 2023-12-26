import React, {
  createContext,
  PropsWithChildren,
  ReactElement,
  useContext,
} from 'react';
import {StyleSheet} from 'react-native';
import {ModalWindow} from './ModalWindow.tsx';
import {Blackover} from '../../components/Blackover.tsx';
import {ModalStore} from './ModalStore.ts';
import {observer} from 'mobx-react';

interface IModalProvider {
  store: ModalStore;
}

interface IModalContext {
  setModal: (component: ReactElement) => void;
  close: () => void;
}

const ModalContext = createContext<IModalContext | null>(null);

export const useModal = () => {
  const context = useContext(ModalContext);

  if (context === null) {
    throw new Error('modal context doesnt exist');
  }

  return context;
};

export const ModalProvider = observer(
  ({children, store}: IModalProvider & PropsWithChildren) => {
    console.log(store.currentModal);

    const hide = () => {
      store.close();
    };

    return (
      <ModalContext.Provider value={store}>
        {children}
        {store.currentModal && (
          <Blackover onPress={hide}>
            <ModalWindow
              modal={store.currentModal}
              style={styles.bottomModal}
            />
          </Blackover>
        )}
      </ModalContext.Provider>
    );
  },
);

const styles = StyleSheet.create({
  bottomModal: {
    position: 'absolute',
    bottom: 0,
  },
});
