import React, {ComponentProps, ReactElement} from 'react';
import {Image, Pressable, StyleSheet, Text, TextStyle} from 'react-native';
import {PartialIcon} from 'icons/IIcon.ts';
import {FontsEnum} from '../../../constants/FontsEnum.ts';

interface IUserBarTab {
  image: ReactElement<PartialIcon> | ReactElement<ComponentProps<typeof Image>>;
  text: string;
  textStyle?: TextStyle;
  onPress?: () => void;
}

export const UserBarTab = ({image, text, textStyle, onPress}: IUserBarTab) => {
  const handlePress = () => {
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
