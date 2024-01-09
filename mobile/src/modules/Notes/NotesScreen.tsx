import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {observer} from 'mobx-react';
import {IconButton} from 'components/IconButton.tsx';
import {IconInput} from 'components/IconInput.tsx';
import {Icons} from 'icons/Icons.ts';
import {UserBar} from '../User/UserBar/UserBar.tsx';
import {useModal} from '../ModalWindow/ModalProvider';
import {AddNote} from './AddNote/AddNote';
import {NotesStore} from './NotesStore.ts';
import {NotesList} from 'modules/Notes/NotesList/NotesList.tsx';
import {useAuth} from 'modules/Auth/hooks/useAuth.ts';

const notesStore = new NotesStore();

export const NotesScreen = observer(() => {
  const modal = useModal();
  const {user} = useAuth();

  // Извлечение записей с сервера.
  useEffect(() => {
    notesStore.setUserId(user.data?.uid ?? '');
    notesStore.fetch();
  }, [user.data]);

  const handleAddButtonClick = () => {
    modal.setModal(
      <AddNote
        notesStore={notesStore}
        userStore={user}
        onSubmit={() => modal.close()}
      />,
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headWrapper}>
        <View style={styles.head}>
          <UserBar imageUrl={''} username={''} />
        </View>
      </View>

      <View style={styles.listWrapper}>
        <NotesList notesStore={notesStore} />
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
    zIndex: 10,
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
