import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {UserBar} from '../components/UserBar/UserBar.tsx';
import {IconButton} from '../components/IconButton.tsx';
import SunIcon from '../assets/icons/SunIcon/SunIcon.tsx';
import {INoteCard, NoteCard} from '../components/NoteCard/NoteCard.tsx';
import {Logo} from '../components/Logo.tsx';
import NoteIcon from '../assets/icons/NoteIcon/NoteIcon.tsx';
import {IconInput} from '../components/IconInput.tsx';
import SearchIcon from '../assets/icons/SearchIcon/SearchIcon.tsx';
import FilterIcon from '../assets/icons/FilterIcon/FilterIcon.tsx';

const __mock__: Array<INoteCard> = [
  {
    id: 1,
    valueable: 'important',
    description: 'what does this date mean?',
    date: new Date(2002, 9, 27, 22, 0, 0),
  },
  {
    id: 2,
    valueable: 'important',
    description: 'complete all serious sam',
    date: new Date(2023, 11, 27, 3, 52, 23),
  },
  {
    id: 3,
    valueable: 'common',
    description: 'no matter',
    date: new Date(2002, 9, 27, 22, 0, 0),
  },
  {
    id: 4,
    valueable: 'common',
    description: 'no matter',
    date: new Date(2002, 9, 27, 22, 0, 0),
  },
  {
    id: 5,
    valueable: 'common',
    description: 'no matter',
    date: new Date(2002, 9, 27, 22, 0, 0),
  },
  {
    id: 6,
    valueable: 'common',
    description: 'no matter',
    date: new Date(2002, 9, 27, 22, 0, 0),
  },
  {
    id: 7,
    valueable: 'common',
    description: 'no matter',
    date: new Date(2002, 9, 27, 22, 0, 0),
  },
  {
    id: 8,
    valueable: 'common',
    description: 'no matter',
    date: new Date(2002, 9, 27, 22, 0, 0),
  },
  {
    id: 9,
    valueable: 'common',
    description: 'no matter',
    date: new Date(2002, 9, 27, 22, 0, 0),
  },
];

export const NotesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headWrapper}>
        <View style={styles.head}>
          <UserBar imageUrl={''} username={'aboba'} />
          <IconButton icon={<SunIcon />} onPress={() => console.log('aboba')} />
        </View>
      </View>

      <View style={{marginTop: 50, marginBottom: 24, height: '100%', flex: 1}}>
        <FlatList
          data={__mock__}
          renderItem={({item}) => (
            <NoteCard
              id={item.id}
              valueable={item.valueable}
              description={item.description}
              date={item.date}
            />
          )}
          keyExtractor={item => String(item.id)}
          contentContainerStyle={{
            gap: 8,
          }}
        />
      </View>

      <View style={styles.actions}>
        <IconButton
          icon={<NoteIcon size={30} isAdd={true} fill={'#CAD0E4'} />}
          text={'Добавить новую запись'}
          parentStyle={{paddingVertical: 4, paddingHorizontal: 8}}
        />

        <View style={styles.searchContainer}>
          <IconInput
            icon={
              <SearchIcon size={18} strokeColor={'#CAD0E4'} strokeWidth={2} />
            }
            text={''}
            onChangeText={() => {}}
            placeholder={'Надо бы найти важную задачу...'}
            isIconPlaceRight={true}
          />
          <IconButton
            icon={<FilterIcon size={30} strokeColor={'#CAD0E4'} />}
            parentStyle={{width: 40, height: 40}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  headWrapper: {
    width: '100%',
    marginTop: 12,
  },
  head: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
  },
  actions: {
    gap: 10,
    marginTop: 'auto',
    marginBottom: 17,
  },
  searchContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
