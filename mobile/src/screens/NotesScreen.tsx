import React from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import {UserBar} from '../components/UserBar/UserBar.tsx';
import {IconButton} from '../components/IconButton.tsx';
import SunIcon from '../assets/icons/SunIcon/SunIcon.tsx';
import {NoteCard} from '../components/NoteCard/NoteCard.tsx';

export const NotesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headWrapper}>
        <View style={styles.head}>
          <UserBar imageUrl={''} username={'aboba'} />
          <IconButton icon={<SunIcon />} onPress={() => console.log('aboba')} />
        </View>
      </View>
      <NoteCard
        valueable={'important'}
        description={
          'there is no matter how many days in your life, it is matter how much life in your days.'
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  headWrapper: {
    width: '100%',
  },
  head: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
  },
});
