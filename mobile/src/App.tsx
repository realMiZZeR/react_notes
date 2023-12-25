import React, {StrictMode} from 'react';
import {ScreenNavigation} from './modules/ScreenNavigtation/ScreenNavigation.tsx';
import {AuthProvider} from './modules/Auth/AuthProvider.tsx';
import {NotificationsProvider} from './modules/Notification/NotificationsProvider.tsx';
import {NotificationStore} from './modules/Notification/NotificationStore.ts';

const App = () => {
  const notificationStore = new NotificationStore();

  return (
    <StrictMode>
      <NotificationsProvider store={notificationStore}>
        <AuthProvider>
          <ScreenNavigation />
        </AuthProvider>
      </NotificationsProvider>
    </StrictMode>
  );
};

export default App;
