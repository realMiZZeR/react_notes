import React, {useRef, useState} from 'react';
import {Pressable, StyleSheet, TextInput} from 'react-native';
import {IIcon} from '../assets/icons/IIcon.ts';

interface IIconInput {
  icon: React.ReactElement<IIcon>;
  text: string;
  onChangeText: (value: string) => void;
  name?: string;
  placeholder?: string;
  isPassword?: boolean;
  isIconPlaceRight?: boolean;
}

/**
 * Поле ввода с иконкой перед текстом (или в конце инпута, если задан определённый проп).
 * @param text
 * @param onChangeText
 * @param placeholder
 * @constructor
 */
export const IconInput = ({
  icon,
  text,
  onChangeText,
  placeholder = '',
  isPassword = false,
  isIconPlaceRight = false,
}: IIconInput) => {
  const [placeholderColor, setPlaceholderColor] = useState(
    styles.textInput.color,
  );

  const textInputRef = useRef<TextInput | null>(null);

  // Нажатие в любом месте компонента, выбирается инпут.
  const handlePress = () => {
    textInputRef.current?.focus();
  };

  // Выделение текста при фокусе инпута.
  const handleTextInputFocus = () => {
    setPlaceholderColor(styles.textOnFocus.color);
  };

  // Отмена выделения текста у инпута.
  const handleTextInputBlur = () => {
    setPlaceholderColor(styles.textInput.color);
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      {icon}
      <TextInput
        ref={textInputRef}
        onBlur={handleTextInputBlur}
        onFocus={handleTextInputFocus}
        value={text}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.textInput}
        placeholderTextColor={placeholderColor}
        secureTextEntry={isPassword}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: '100%',
    height: 'auto',
    padding: 8,
    backgroundColor: '#1E1833',
    borderColor: '#302948',
    borderWidth: 1,
    borderRadius: 4,
  },
  icon: {},
  textInput: {
    width: '100%',
    color: '#CAD0E4',
    fontSize: 12,
  },
  textOnFocus: {
    color: '#FFF',
  },
  placeholder: {
    color: 'gray',
  },
});
