import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {FontsEnum} from '../constants/FontsEnum.ts';
import {Icons} from 'icons/Icons.ts';

interface ILogo {
  size: 'small' | 'large';
  containerStyle?: ViewStyle;
}

/**
 * Логотип приложения, предоставляющий функционал масштабирования.
 * @param size
 * @param containerStyle
 * @constructor
 */
export const Logo = ({size, containerStyle}: ILogo) => {
  const [textStyle, setTextStyle] = useState(styles.text);
  const [logoSize, setLogoSize] = useState(64);

  useEffect(() => {
    // Определение размера иконки логотипа.
    setLogoSize(size === 'small' ? 32 : 64);

    // Определение стилей для текста.
    setTextStyle(size === 'small' ? styles.textSmall : styles.text);
  }, [size]);

  return (
    <View style={{...styles.container, ...containerStyle}}>
      <Icons.Note size={logoSize} backgroundCardOpacity={0.5} fill={'#FFF'} />
      {size === 'small' ? (
        <Text style={textStyle}>SE Notes</Text>
      ) : (
        <View>
          <Text style={textStyle}>SE</Text>
          <Text style={textStyle}>Notes</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  text: {
    color: '#FFF',
    fontFamily: FontsEnum.Montserrat,
    fontSize: 16,
    fontWeight: '700',
  },
  textSmall: {
    color: '#FFF',
    fontFamily: FontsEnum.Montserrat,
    fontSize: 14,
    fontWeight: '700',
  },
});
