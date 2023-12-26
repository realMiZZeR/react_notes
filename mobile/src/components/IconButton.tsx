import {Pressable, StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';
import React from 'react';
import {IIcon} from '../assets/icons/IIcon.ts';
import {FontsEnum} from '../constants/FontsEnum.ts';

type IconButtonType = 'bordered' | 'colored';

interface IIconButton {
  icon?: React.ReactElement<IIcon>;
  text?: string;
  onPress?: () => void;
  type?: IconButtonType;
  style?: {button?: ViewStyle; text?: TextStyle};
}

export const IconButton = ({icon, text, onPress, type, style}: IIconButton) => {
  const handlePress = () => {
    onPress?.();
  };

  const containerStyles = [styles.container, style?.button];
  if (type === 'bordered') {
    containerStyles.push(styles.containerBordered);
  }

  return (
    <Pressable
      onPress={handlePress}
      style={StyleSheet.flatten(containerStyles)}>
      {icon && icon}
      {text && (
        <Text style={StyleSheet.compose(styles.text, style?.text)}>{text}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    gap: 8,
    backgroundColor: '#3D3657',
    borderRadius: 4,
  },
  containerBordered: {
    backgroundColor: '#1E1833',
    borderColor: 'rgba(57,50,83,0.65)',
    borderWidth: 0.5,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    color: '#FFF',
    fontFamily: FontsEnum.Raleway,
    fontSize: 14,
    fontWeight: '600',
  },
});
