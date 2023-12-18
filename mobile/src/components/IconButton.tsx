import {Pressable, StyleSheet, Text, ViewStyle} from 'react-native';
import React from 'react';
import {IIcon} from '../assets/icons/IIcon.ts';
import {FontsEnum} from '../constants/FontsEnum.ts';

interface IIconButton {
  icon: React.ReactElement<IIcon>;
  text: string;
  onPress: () => void;
  onlyPropStyle?: boolean;
  parentStyle?: ViewStyle;
}

export const IconButton = ({
  icon,
  text,
  onPress,
  onlyPropStyle,
  parentStyle,
}: IIconButton) => {
  const handlePress = () => {
    onPress();
  };

  const pressableStyle = onlyPropStyle
    ? parentStyle
    : {...styles.container, ...parentStyle};

  return (
    <Pressable onPress={handlePress} style={pressableStyle}>
      {icon}
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8,
    gap: 8,
    backgroundColor: '#3D3657',
    borderRadius: 4,
  },
  text: {
    color: '#FFF',
    fontFamily: FontsEnum.Raleway,
    fontSize: 12,
    fontWeight: '600',
  },
});
