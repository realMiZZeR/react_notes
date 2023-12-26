import {Pressable, StyleSheet, View, ViewStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';

interface IBlackover {
  onPress?: () => void;
  style?: ViewStyle;
}

export const Blackover = ({
  children,
  onPress,
}: IBlackover & PropsWithChildren) => {
  const handlePress = () => {
    onPress?.();
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(22,20,24,0.85)',
  },
});
