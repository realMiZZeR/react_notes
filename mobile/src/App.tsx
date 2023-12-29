import React, {StrictMode} from 'react';
import {ScreenNavigation} from './modules/ScreenNavigtation/ScreenNavigation.tsx';
import {NotificationsProvider} from './modules/Notification/NotificationsProvider.tsx';
import {NotificationStore} from './modules/Notification/NotificationStore.ts';
import {ModalProvider} from './modules/ModalWindow/ModalProvider.tsx';
import {ModalStore} from './modules/ModalWindow/ModalStore.ts';

const App = () => {
  const notificationStore = new NotificationStore();
  const modalStore = new ModalStore();

  return (
    <StrictMode>
      <NotificationsProvider store={notificationStore}>
        <ModalProvider store={modalStore}>
          <ScreenNavigation />
        </ModalProvider>
      </NotificationsProvider>
    </StrictMode>
  );
};

export default App;
