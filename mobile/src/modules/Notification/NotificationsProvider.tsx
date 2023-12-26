import React, {createContext, PropsWithChildren, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {observer} from 'mobx-react';
import {NotificationCard} from './NotificationCard.tsx';
import {INotificationProvider} from './interfaces/INotificationProvider.ts';

const NotificationsContext = createContext<INotificationProvider | null>(null);

/**
 * Хук для извлечения полей и методов NotificationsProvider.
 */
export const useNotifications = () => {
  const context = useContext(NotificationsContext);

  if (context === null) {
    throw new Error('notification context doesnt exist');
  }

  return context;
};

/**
 * Компонент, который отрисовывает оповещения в приложении.
 */
export const NotificationsProvider = observer(
  ({children, store}: INotificationProvider & PropsWithChildren) => {
    const value = {
      store: store,
    };

    return (
      <NotificationsContext.Provider value={value}>
        {children}

        {/* Отрисовка оповещений */}
        <View style={styles.container}>
          {store.messages &&
            store.messages.map(message => (
              <NotificationCard
                key={message.id}
                notificationMessage={message}
              />
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
