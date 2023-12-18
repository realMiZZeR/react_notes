import {Image, StyleSheet, View} from 'react-native';
import {PartialIcon} from '../../assets/icons/IIcon.ts';
import {ReactElement} from 'react';

interface IUserBarTab {
  image: ReactElement<PartialIcon> | Image;
}

export const UserBarTab = ({image}: IUserBarTab) => {
  return <View>{image}</View>;
};

const styles = StyleSheet.create({
  container: {},
});
