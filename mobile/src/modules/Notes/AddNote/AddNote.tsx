import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {IconInput} from 'components/IconInput.tsx';
import {NoteValuable} from '../NoteCard/NoteValuable.ts';
import {IconButton} from 'components/IconButton.tsx';
import {FontsEnum} from '../../../constants/FontsEnum.ts';
import {IFormData} from './IFormData.ts';
import {Icons} from 'icons/Icons.ts';

interface IAddNote {
  onSubmit?: (data: IFormData) => void;
}

export const AddNote = ({onSubmit}: IAddNote) => {
  const [formData, setFormData] = useState<IFormData>({
    description: '',
    valuable: 'common',
    date: new Date(),
    repeat: false,
  });

  const handleDescriptionInput = (value: string) => {
    setFormData({
      ...formData,
      description: value,
    });
  };

  const handleValuableButton = (value: NoteValuable) => {
    setFormData({
      ...formData,
      valuable: value,
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

  const handleCreateButton = () => {
    onSubmit?.(formData);
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
          onPress={() => handleValuableButton('important')}
          style={{
            button:
              formData.valuable === 'important'
                ? styles.valuableButton
                : styles.valuableButtonInactive,
            text: styles.valuableText,
          }}
        />
        <IconButton
          icon={<Icons.Note size={24} fill={'#CAD0E4'} />}
          text={'обычная'}
          onPress={() => handleValuableButton('common')}
          style={{
            button:
              formData.valuable === 'common'
                ? styles.valuableButton
                : styles.valuableButtonInactive,
            text: styles.valuableText,
          }}
        />
      </View>

      <View style={styles.settings}>
        <IconButton
          icon={<Icons.Clock size={16} strokeColor={'#CAD0E4'} />}
          text={formData.date.toLocaleTimeString()}
          onPress={handleTimeButton}
          style={{
            button: styles.settingsButton,
            text: styles.settingsText,
          }}
          type={'bordered'}
        />
        <IconButton
          icon={<Icons.Calendar size={16} strokeColor={'#CAD0E4'} />}
          text={formData.date.toLocaleDateString()}
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

      <IconButton
        text={'Создать'}
        onPress={handleCreateButton}
        style={{
          button: styles.saveButton,
        }}
      />
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
