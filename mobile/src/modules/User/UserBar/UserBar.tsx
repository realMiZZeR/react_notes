import React, {useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  GestureResponderEvent,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import {UserBarTab} from './UserBarTab.tsx';
import {observer} from 'mobx-react';
import {useAuth} from '../../Auth/hooks/useAuth.ts';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../ScreenNavigtation/RootStackParamList.ts';
import {Icons} from 'icons/Icons.ts';

interface IUserBar {
  imageUrl: string | null;
  username: string;
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const UserBar = observer(({}: IUserBar) => {
  const {user, signOut} = useAuth();
  const navigation = useNavigation<NavigationProp>();
  const [isOpen, setIsOpen] = useState(false);

  const handlePress = (e: GestureResponderEvent) => {
    e.stopPropagation();
    setIsOpen(prev => !prev);
  };

  const handleExitButton = () => {
    signOut();
    navigation.navigate('Auth');
  };

  return (
    <Pressable
      onStartShouldSetResponder={() => true}
      onTouchEnd={handlePress}
      style={styles.container}>
      <UserBarTab
        image={<Image style={styles.userImage} />}
        text={user.data?.email ?? ''}
        textStyle={styles.userText}
      />
      {isOpen && (
        <UserBarTab
          image={<Icons.Exit size={24} />}
          text={'Выйти'}
          onPress={handleExitButton}
        />
      )}
    </Pressable>
  );
});

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
