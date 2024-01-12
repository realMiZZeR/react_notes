import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {observer} from 'mobx-react';
import {NoteCard} from 'modules/Notes/NoteCard/NoteCard.tsx';
import {NotesStore} from 'modules/Notes/NotesStore.ts';
import {FontsEnum} from '../../../constants/FontsEnum.ts';
import {INote} from 'modules/Notes/NoteCard/INote.ts';

interface INotesList {
  notesStore: NotesStore;
  onPressEditNote?: (data: INote) => void;
  onPressDeleteNote?: (id: string) => void;
}

// Компонент-обёртка для текста.
const StateText = ({text}: {text: string}) => {
  return <Text style={styles.stateText}>{text}</Text>;
};

export const NotesList = observer(
  ({notesStore, onPressEditNote, onPressDeleteNote}: INotesList) => {
    const onNoteEditButton = (data: INote) => {
      onPressEditNote?.(data);
    };

    const onNoteDeleteButton = (id: string) => {
      onPressDeleteNote?.(id);
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
      return <StateText text={'Загрузка записей...'} />;
    }

    if (notesStore.notes.length === 0) {
      return <StateText text={'Пока что здесь нет никаких задач.'} />;
    }

    return <AllNotes />;
  },
);

const styles = StyleSheet.create({
  stateText: {
    fontFamily: FontsEnum.Inter,
    color: '#FFF',
  },
});
