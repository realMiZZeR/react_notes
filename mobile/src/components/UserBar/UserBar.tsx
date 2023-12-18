import {
  GestureResponderEvent,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {UserBarTab} from './UserBarTab.tsx';
import ExitIcon from '../../assets/icons/ExitIcon/ExitIcon.tsx';

interface IUserBar {
  imageUrl: string | null;
  username: string;
}

export const UserBar = ({imageUrl, username}: IUserBar) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePress = (e: GestureResponderEvent) => {
    e.stopPropagation();
    setIsOpen(prev => !prev);
  };

  const handleExitButton = () => {
    console.log('exit');
  };

  return (
    <Pressable
      onStartShouldSetResponder={event => true}
      onTouchEnd={handlePress}
      style={styles.container}>
      <UserBarTab
        image={<Image style={styles.userImage} />}
        text={'aboba'}
        textStyle={styles.userText}
      />
      {isOpen && (
        <UserBarTab
          image={<ExitIcon size={24} />}
          text={'Выйти'}
          onPress={handleExitButton}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#FFF',
    borderRadius: 8,
  },
  userImage: {
    width: 24,
    height: 24,
    backgroundColor: '#D9D9D9',
    borderRadius: 12,
  },
  userText: {
    fontWeight: '600',
  },
});
