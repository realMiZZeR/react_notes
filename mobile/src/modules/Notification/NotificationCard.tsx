import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {INotificationMessage} from './interfaces/INotificationMessage.ts';
import {NotificationType} from './types/NotificationType.ts';
import {FontsEnum} from '../../constants/FontsEnum.ts';

interface INotificationCard {
  notificationMessage: INotificationMessage;
  onPress?: () => void;
}

const NotificationColor: Record<NotificationType, string> = {
  ['default']: '#3c3656',
  ['warning']: '#e87415',
  ['alarm']: '#d03737',
};

/**
 * Компонент оповещения пользователя о каком-либо действии.
 * @param message
 * @constructor
 */
export const NotificationCard = ({
  notificationMessage,
  onPress,
}: INotificationCard) => {
  const handlePress = () => {
    onPress?.();
  };

  const flattenStyle = StyleSheet.compose(styles.container, {
    backgroundColor: NotificationColor[notificationMessage.type],
  });

  return (
    <Pressable onPress={handlePress} style={flattenStyle}>
      <Text style={styles.text}>{notificationMessage.text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 4,
    overflow: 'hidden',
  },
  text: {
    fontFamily: FontsEnum.Inter,
    fontSize: 14,
    color: '#FFF',
  },
});
