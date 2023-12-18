import React, {ComponentProps, ReactElement, ReactNode} from 'react';
import {
  GestureResponderEvent,
  Image,
  ImageComponent,
  ImageProps,
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from 'react-native';
import {PartialIcon} from '../../assets/icons/IIcon.ts';
import {FontsEnum} from '../../constants/FontsEnum.ts';

interface IUserBarTab {
  image: ReactElement<PartialIcon> | ReactElement<ComponentProps<typeof Image>>;
  text: string;
  textStyle?: TextStyle;
  onPress?: () => void;
}

export const UserBarTab = ({image, text, textStyle, onPress}: IUserBarTab) => {
  const handlePress = (e: GestureResponderEvent) => {
    onPress?.();
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      {image}
      <Text style={{...styles.text, ...textStyle}}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  text: {
    fontFamily: FontsEnum.Raleway,
    fontSize: 12,
  },
});
