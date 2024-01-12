import {PartialIcon} from 'icons/IIcon.ts';
import React, {ReactElement, useState} from 'react';
import {LayoutChangeEvent, StyleSheet, Text, View} from 'react-native';
import {FontsEnum} from '../../constants/FontsEnum.ts';

interface ICustomModalTitle {
  icon: ReactElement<PartialIcon>;
  text: string;
}

export const CustomModalTitle = ({icon, text}: ICustomModalTitle) => {
  const [height, setHeight] = useState(0);

  const onLayout = (event: LayoutChangeEvent) => {
    setHeight(event.nativeEvent.layout.height / 2);
  };

  return (
    <View
      onLayout={onLayout}
      style={StyleSheet.compose(styles.container, {top: height})}>
      {icon}
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 4,
    gap: 8,
    backgroundColor: '#393253',
    borderRadius: 4,
    zIndex: 1,
  },
  text: {
    fontFamily: FontsEnum.Raleway,
    fontWeight: '600',
    fontSize: 14,
    color: '#FFF',
  },
});
