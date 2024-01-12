import React, {StrictMode} from 'react';
import {ScreenNavigation} from './modules/ScreenNavigtation/ScreenNavigation.tsx';
import {NotificationsProvider} from './modules/Notification/NotificationsProvider.tsx';
import {NotificationStore} from './modules/Notification/NotificationStore.ts';
import {BlackoutProvider} from 'modules/Blackout/BlackoutProvider.tsx';

const App = () => {
  const notificationStore = new NotificationStore();

  return (
    <StrictMode>
      <NotificationsProvider store={notificationStore}>
        <BlackoutProvider>
          <ScreenNavigation />
        </BlackoutProvider>
      </NotificationsProvider>
    </StrictMode>
  );
};

export default App;
