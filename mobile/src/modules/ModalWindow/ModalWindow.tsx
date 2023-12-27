import React, {PropsWithChildren, ReactElement, useState} from 'react';
import {
  LayoutChangeEvent,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {FontsEnum} from '../../constants/FontsEnum.ts';
import {useModal} from './ModalProvider.tsx';
import {Icons} from 'icons/Icons.ts';

interface IModalWindow {
  modal: ReactElement;
  style?: ViewStyle;
}

export const ModalWindow = ({
  children,
  modal,
  style,
}: IModalWindow & PropsWithChildren) => {
  const {} = useModal();

  const [headStyle, setHeadStyle] = useState<ViewStyle | null>(null);

  // Позиционирование заголовка по центру верхушки модалки.
  const onHeadLayout = (event: LayoutChangeEvent) => {
    const {height} = event.nativeEvent.layout;
    setHeadStyle({
      top: (height / 2) * -1,
    });
  };

  return (
    <View style={StyleSheet.compose(styles.container, style)}>
      {children}

      <View
        onLayout={onHeadLayout}
        style={StyleSheet.compose(styles.head, headStyle)}>
        <Icons.Note size={24} fill={'#CAD0E4'} isAdd={true} />
        <Text style={styles.text}>Новая запись</Text>
      </View>
      {modal}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: 310,
    paddingVertical: 31,
    paddingHorizontal: 10,
    backgroundColor: '#0F0A21',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  head: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 8,
    paddingHorizontal: 6,
    paddingVertical: 4,
    backgroundColor: '#393253',
    borderRadius: 4,
  },
  text: {
    color: '#FFF',
    fontFamily: FontsEnum.Raleway,
    fontSize: 14,
    fontWeight: '600',
  },
});
