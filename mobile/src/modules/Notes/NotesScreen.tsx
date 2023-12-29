import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {observer} from 'mobx-react';
import {IconButton} from 'components/IconButton.tsx';
import {IconInput} from 'components/IconInput.tsx';
import {Icons} from 'icons/Icons.ts';
import {UserBar} from '../User/UserBar/UserBar.tsx';
import {NoteCard} from './NoteCard/NoteCard';
import {useModal} from '../ModalWindow/ModalProvider';
import {AddNote} from './AddNote/AddNote';
import {NotesStore} from './NoteCard/NotesStore';
import {IFormData} from './AddNote/IFormData';

const notesStore = new NotesStore();

export const NotesScreen = observer(() => {
  const modal = useModal();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    console.log(notesStore.fetch());
  });

  const handleAddNoteSubmit = (data: IFormData) => {
    console.log('handle submit');
    notesStore.add({
      id: Number(Date.now()),
      description: data.description,
      importance: data.valuable,
      date: data.date,
    });
    modal.close();
  };

  const handleAddButtonClick = () => {
    modal.setModal(<AddNote onSubmit={handleAddNoteSubmit} />);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headWrapper}>
        <View style={styles.head}>
          <UserBar imageUrl={''} username={'aboba'} />
          <IconButton
            style={{button: {maxWidth: 40}}}
            icon={<Icons.Sun />}
            onPress={() => console.log('aboba')}
          />
        </View>
      </View>

      <View style={styles.listWrapper}>
        {notesStore.notes.length === 0 ? (
          <Text style={{color: '#FFF'}}>Пока что здесь нет никаких задач.</Text>
        ) : (
          <FlatList
            data={notesStore.notes}
            renderItem={({item}) => (
              <NoteCard
                id={item.id}
                importance={item.importance}
                description={item.description}
                date={item.date}
              />
            )}
            keyExtractor={item => String(item.id)}
            contentContainerStyle={{
              gap: 8,
            }}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>

      <View style={styles.actions}>
        <IconButton
          icon={<Icons.Note size={30} isAdd={true} fill={'#CAD0E4'} />}
          text={'Добавить новую запись'}
          onPress={handleAddButtonClick}
          style={{
            button: styles.addButton,
          }}
        />

        <View style={styles.searchContainer}>
          <IconInput
            icon={
              <Icons.Search size={18} strokeColor={'#CAD0E4'} strokeWidth={2} />
            }
            text={''}
            onChangeText={() => {}}
            placeholder={'Надо бы найти важную задачу...'}
            isIconPlaceRight={true}
            style={{
              container: styles.searchInput,
            }}
          />
          <IconButton
            icon={
              <Icons.Filter size={24} strokeColor={'#CAD0E4'} strokeWidth={1} />
            }
            style={{
              button: styles.searchButton,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  headWrapper: {
    alignSelf: 'flex-start',
    marginTop: 12,
  },
  head: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  listWrapper: {
    flex: 1,
    flexGrow: 6,
    marginTop: 50,
    marginBottom: 24,
    height: '100%',
  },
  actions: {
    flex: 1,
    gap: 10,
    marginTop: 'auto',
  },
  addButton: {
    flex: 1,
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    height: 40,
  },
  searchInput: {
    flexBasis: 300,
  },
  searchButton: {},
});
