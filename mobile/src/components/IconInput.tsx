import React, {useRef, useState} from 'react';
import {Pressable, StyleSheet, TextInput, ViewStyle} from 'react-native';
import {IIcon} from '../assets/icons/IIcon.ts';

interface IIconInput {
  text: string;
  onChangeText: (value: string) => void;
  style?: {container?: ViewStyle; input?: ViewStyle};
  icon?: React.ReactElement<IIcon>;
  name?: string;
  placeholder?: string;
  isPassword?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
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
  style,
  onChangeText,
  placeholder = '',
  isPassword = false,
  multiline = false,
  numberOfLines = 4,
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
    <Pressable
      onPress={handlePress}
      style={StyleSheet.flatten([
        styles.container,
        style?.container,
        {flexDirection: isIconPlaceRight ? 'row-reverse' : 'row'},
      ])}>
      {icon && icon}
      <TextInput
        ref={textInputRef}
        onBlur={handleTextInputBlur}
        onFocus={handleTextInputFocus}
        value={text}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        secureTextEntry={isPassword}
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={StyleSheet.compose(styles.textInput, style?.input)}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: '100%',
    padding: 8,
    backgroundColor: '#1E1833',
    borderColor: '#302948',
    borderWidth: 1,
    borderRadius: 4,
  },
  textInput: {
    flex: 1,
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
