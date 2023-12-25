import React, {createContext, PropsWithChildren, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {observer} from 'mobx-react';
import {NotificationStore} from './NotificationStore.ts';
import {NotificationCard} from './NotificationCard.tsx';

interface INotificationProvider {
  store: NotificationStore;
}

const NotificationsContext = createContext<INotificationProvider | null>(null);

export const useNotifications = () => {
  const context = useContext(NotificationsContext);

  if (context === null) {
    throw new Error('notification context doesnt exist');
  }

  return context;
};

export const NotificationsProvider = observer(
  ({children, store}: INotificationProvider & PropsWithChildren) => {
    const value = {
      store: store,
    };

    return (
      <NotificationsContext.Provider value={value}>
        {children}
        <View style={styles.container}>
          {store.messages &&
            store.messages.map(message => (
              <NotificationCard notificationMessage={message} />
            ))}
        </View>
      </NotificationsContext.Provider>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 8,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100%',
    paddingVertical: 24,
    paddingHorizontal: 24,
    pointerEvents: 'none',
  },
});
