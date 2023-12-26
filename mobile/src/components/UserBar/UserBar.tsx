import React, {useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  GestureResponderEvent,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import {UserBarTab} from './UserBarTab.tsx';
import ExitIcon from '../../assets/icons/ExitIcon/ExitIcon.tsx';
import {observer} from 'mobx-react';
import {useAuth} from '../../modules/Auth/hooks/useAuth.ts';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../modules/ScreenNavigtation/RootStackParamList.ts';

interface IUserBar {
  imageUrl: string | null;
  username: string;
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const UserBar = observer(({imageUrl, username}: IUserBar) => {
  const {user, exit} = useAuth();
  const navigation = useNavigation<NavigationProp>();
  const [isOpen, setIsOpen] = useState(false);

  const handlePress = (e: GestureResponderEvent) => {
    e.stopPropagation();
    setIsOpen(prev => !prev);
  };

  const handleExitButton = () => {
    exit();
    navigation.navigate('Auth');
  };

  return (
    <Pressable
      onStartShouldSetResponder={event => true}
      onTouchEnd={handlePress}
      style={styles.container}>
      <UserBarTab
        image={<Image style={styles.userImage} />}
        text={user.data?.login ?? ''}
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
