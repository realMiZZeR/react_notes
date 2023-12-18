import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface IUserBar {
  imageUrl: string | null;
  username: string;
}

export const UserBar = ({imageUrl, username}: IUserBar) => {
  return (
    <View>
      <Image source={{uri: imageUrl}} />
      <Text>{username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#FFF',
  },
  image: {},
  text: {},
});
