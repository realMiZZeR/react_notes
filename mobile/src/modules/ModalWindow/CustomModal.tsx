import {Modal, Pressable, StyleSheet} from 'react-native';
import React, {PropsWithChildren, ReactElement} from 'react';
import {CustomModalTitle} from 'modules/ModalWindow/CustomModalTitle.tsx';
import {PartialIcon} from 'icons/IIcon.ts';

interface ICustomModal {
  isVisible: boolean;
  title?: {icon: ReactElement<PartialIcon>; text: string};
  outPress?: () => void;
}

export const CustomModal = ({
  children,
  isVisible,
  title,
  outPress,
}: ICustomModal & PropsWithChildren) => {
  return (
    <Modal visible={isVisible} transparent={true} animationType={'slide'}>
      <Pressable onPress={outPress} style={styles.bottomView}>
        {title && <CustomModalTitle icon={title?.icon} text={title?.text} />}
        {children}
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  bottomView: {
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
    borderRadius: 8,
    overflow: 'hidden',
  },
});
