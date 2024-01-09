import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {observer} from 'mobx-react';
import {NoteCard} from 'modules/Notes/NoteCard/NoteCard.tsx';
import {NotesStore} from 'modules/Notes/NotesStore.ts';
import {FontsEnum} from '../../../constants/FontsEnum.ts';
import {useModal} from 'modules/ModalWindow/ModalProvider.tsx';
import {AddNote} from 'modules/Notes/AddNote/AddNote.tsx';
import {INote} from 'modules/Notes/NoteCard/INote.ts';
import {useAuth} from 'modules/Auth/hooks/useAuth.ts';

interface INotesList {
  notesStore: NotesStore;
}

export const NotesList = observer(({notesStore}: INotesList) => {
  const modal = useModal();
  const {user} = useAuth();

  const onNoteEditButton = (data: INote) => {
    modal.setModal(
      <AddNote
        notesStore={notesStore}
        userStore={user}
        initialData={data}
        isEdit={true}
        onSubmit={() => modal.close()}
      />,
    );
  };

  const onNoteDeleteButton = (id: string) => {
    notesStore.remove(id);
  };

  const Loading = () => {
    return <Text style={styles.stateText}>Загрузка записей...</Text>;
  };

  const NoNotes = () => {
    return (
      <Text style={styles.stateText}>Пока что здесь нет никаких задач.</Text>
    );
  };

  const AllNotes = () => {
    return (
      <FlatList
        data={notesStore.notes}
        renderItem={({item}) => (
          <NoteCard
            data={item}
            onEdit={onNoteEditButton}
            onDelete={onNoteDeleteButton}
          />
        )}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={{
          gap: 8,
        }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    );
  };

  if (notesStore.isLoading) {
    return <Loading />;
  }

  if (notesStore.notes.length === 0) {
    return <NoNotes />;
  }

  return <AllNotes />;
});

const styles = StyleSheet.create({
  stateText: {
    fontFamily: FontsEnum.Inter,
    color: '#FFF',
  },
});
