import React, {ReactElement} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PartialIcon} from 'icons/IIcon.ts';

interface INoteDetail {
  text: string;
  icon?: ReactElement<PartialIcon>;
  color?: string;
}

export const NoteDetail = ({text, icon, color = '#CAD0E4'}: INoteDetail) => {
  return (
    <View style={styles.container}>
      {icon && <icon.type {...icon.props} style={styles.icon} />}
      <Text style={{...styles.text, color: color}}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  icon: {},
  text: {
    fontFamily: 'Inter',
    fontSize: 8,
    fontWeight: '600',
    color: '#CAD0E4',
  },
});
