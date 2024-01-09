import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {IconInput} from 'components/IconInput.tsx';
import {NoteImportance} from '../NoteCard/NoteImportance.ts';
import {IconButton} from 'components/IconButton.tsx';
import {FontsEnum} from '../../../constants/FontsEnum.ts';
import {Icons} from 'icons/Icons.ts';
import {INote} from 'modules/Notes/NoteCard/INote.ts';
import {Timestamp} from '@react-native-firebase/firestore/lib/modular/Timestamp';
import {NotesStore} from 'modules/Notes/NotesStore.ts';
import {UserStore} from 'modules/User/UserStore.ts';

interface IAddNote {
  notesStore: NotesStore;
  userStore: UserStore;
  onSubmit?: () => void;
  initialData?: INote;
  isEdit?: boolean;
}

export const AddNote = ({
  notesStore,
  userStore,
  onSubmit,
  initialData,
  isEdit,
}: IAddNote) => {
  const [formData, setFormData] = useState<INote>({
    id: '0',
    userId: userStore.data?.uid ?? '',
    description: '',
    importance: 'common',
    date: Timestamp.now(),
    repeat: false,
  });

  useEffect(() => {
    if (!initialData) {
      return;
    }

    setFormData({
      id: initialData.id,
      userId: userStore.data?.uid ?? '',
      description: initialData.description,
      importance: initialData.importance,
      date: initialData.date,
      repeat: initialData.repeat,
    });
  }, [userStore.data, initialData]);

  const handleDescriptionInput = (value: string) => {
    setFormData({
      ...formData,
      description: value,
    });
  };

  const handleImportanceButton = (value: NoteImportance) => {
    setFormData({
      ...formData,
      importance: value,
    });
  };

  const handleDateButton = () => {};

  const handleTimeButton = () => {};

  const handleRepeatButton = () => {
    setFormData({
      ...formData,
      repeat: !formData.repeat,
    });
  };

  const onSubmitButton = () => {
    notesStore.add(formData);
    onSubmit?.();
  };

  return (
    <View style={styles.container}>
      <IconInput
        text={formData.description}
        onChangeText={handleDescriptionInput}
        placeholder={'Какая задача на этот раз?'}
        style={{
          input: styles.descriptionInput,
        }}
        multiline={true}
      />

      <View style={styles.valuables}>
        <IconButton
          icon={<Icons.Warning size={24} fill={'#CAD0E4'} />}
          text={'важная'}
          onPress={() => handleImportanceButton('important')}
          style={{
            button:
              formData.importance === 'important'
                ? styles.valuableButton
                : styles.valuableButtonInactive,
            text: styles.valuableText,
          }}
        />
        <IconButton
          icon={<Icons.Note size={24} fill={'#CAD0E4'} />}
          text={'обычная'}
          onPress={() => handleImportanceButton('common')}
          style={{
            button:
              formData.importance === 'common'
                ? styles.valuableButton
                : styles.valuableButtonInactive,
            text: styles.valuableText,
          }}
        />
      </View>

      <View style={styles.settings}>
        <IconButton
          icon={<Icons.Clock size={16} strokeColor={'#CAD0E4'} />}
          text={formData.date.toDate().toLocaleTimeString()}
          onPress={handleTimeButton}
          style={{
            button: styles.settingsButton,
            text: styles.settingsText,
          }}
          type={'bordered'}
        />
        <IconButton
          icon={<Icons.Calendar size={16} strokeColor={'#CAD0E4'} />}
          text={formData.date.toDate().toLocaleDateString()}
          onPress={handleDateButton}
          style={{
            button: styles.settingsButton,
            text: styles.settingsText,
          }}
          type={'bordered'}
        />
        <IconButton
          icon={<Icons.Repeat size={16} strokeColor={'#CAD0E4'} />}
          text={'Повторять'}
          onPress={handleRepeatButton}
          style={{
            button: styles.settingsButton,
            text: styles.settingsText,
          }}
          type={formData.repeat ? 'colored' : 'bordered'}
        />
      </View>

      {isEdit ? (
        <IconButton
          text={'Редактировать'}
          onPress={onSubmitButton}
          style={{
            button: styles.saveButton,
          }}
        />
      ) : (
        <IconButton
          text={'Создать'}
          onPress={onSubmitButton}
          style={{
            button: styles.saveButton,
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
    height: '100%',
  },
  descriptionInput: {
    minHeight: 80,
    maxHeight: 80,
  },
  valuables: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 8,
    width: '100%',
  },
  valuableText: {
    textAlign: 'left',
  },
  valuableButton: {
    flex: 1,
    width: '100%',
    height: 36,
  },
  valuableButtonInactive: {
    flex: 1,
    width: '100%',
    height: 36,
    opacity: 0.7,
  },
  settings: {
    flexDirection: 'row',
    gap: 8,
  },
  settingsButton: {
    height: 32,
  },
  settingsText: {
    fontFamily: FontsEnum.Inter,
    fontSize: 12,
    fontWeight: '500',
    color: '#CAD0E4',
  },
  saveButton: {
    maxHeight: 38,
    marginTop: 'auto',
  },
});
