import {Pressable, StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';
import React from 'react';
import {IIcon} from '../assets/icons/IIcon.ts';
import {FontsEnum} from '../constants/FontsEnum.ts';

interface IIconButton {
  icon?: React.ReactElement<IIcon>;
  text?: string;
  onPress?: () => void;
  onlyPropStyle?: boolean;
  parentStyle?: ViewStyle;
  textStyle?: TextStyle;
}

export const IconButton = ({
  icon,
  text,
  onPress,
  onlyPropStyle,
  parentStyle,
  textStyle,
}: IIconButton) => {
  const handlePress = () => {
    onPress?.();
  };

  const pressableStyle = onlyPropStyle
    ? parentStyle
    : {...styles.container, ...parentStyle};

  const textStyles = onlyPropStyle ? textStyle : {...styles.text, ...textStyle};

  return (
    <Pressable onPress={handlePress} style={pressableStyle}>
      {icon}
      {text && <Text style={textStyles}>{text}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    gap: 8,
    backgroundColor: '#3D3657',
    borderRadius: 4,
  },
  text: {
    flex: 1,
    width: '100%',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: FontsEnum.Raleway,
    fontSize: 14,
    fontWeight: '600',
  },
});
