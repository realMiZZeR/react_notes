import React, {useState} from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NoteDetail} from './NoteDetail.tsx';
import {FontsEnum} from '../../../constants/FontsEnum.ts';
import {IconButton} from 'components/IconButton.tsx';
import {INote} from './INote.ts';
import {Icons} from 'icons/Icons.ts';

interface INoteCard {
  data: INote;
  onEdit?: (data: INote) => void;
  onDelete?: (id: string) => void;
  onNotePress?: () => void;
}

export const NoteCard = ({data, onDelete, onEdit, onNotePress}: INoteCard) => {
  const [isActionShown, setIsActionShown] = useState(false);

  const onCardLongPress = (e: GestureResponderEvent) => {
    e.stopPropagation();
    onNotePress?.();
    setIsActionShown(prev => !prev);
  };

  const onEditButton = () => {
    onEdit?.(data);
  };

  const onDeleteButton = () => {
    onDelete?.(data.id);
  };

  return (
    <View
      style={
        data.importance === 'important'
          ? {...styles.container}
          : styles.container
      }>
      <Pressable
        delayLongPress={300}
        onLongPress={onCardLongPress}
        style={styles.card}>
        {data.importance === 'important' ? (
          <Icons.Warning size={30} fill={'#CAD0E4'} />
        ) : (
          <Icons.Note size={30} fill={'#CAD0E4'} />
        )}

        <View style={styles.info}>
          <Text
            numberOfLines={1}
            ellipsizeMode={'tail'}
            style={styles.description}>
            {data.description}
          </Text>
          <View style={styles.details}>
            <NoteDetail
              icon={<Icons.Clock size={12} strokeColor={'#CAD0E4'} />}
              text={data.date.toDate().toLocaleTimeString()}
              color={'#CAD0E4'}
            />
            <NoteDetail
              icon={<Icons.Calendar size={12} strokeColor={'#CAD0E4'} />}
              text={data.date.toDate().toLocaleDateString()}
              color={'#CAD0E4'}
            />
          </View>
        </View>
      </Pressable>

      {isActionShown && (
        <View style={styles.actions}>
          <IconButton
            text={'Удалить'}
            icon={<Icons.Delete size={24} strokeColor={'#CAD0E4'} />}
            onPress={onDeleteButton}
            style={{
              button: styles.actionButton,
            }}
          />
          <IconButton
            text={'Редактировать'}
            icon={<Icons.Edit size={24} strokeColor={'#CAD0E4'} />}
            onPress={onEditButton}
            style={{
              button: styles.actionButton,
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 6,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 10,
    backgroundColor: '#3D3657',
    borderRadius: 8,
  },
  info: {
    flex: 1,
    width: '100%',
    gap: 4,
  },
  description: {
    width: '100%',
    fontFamily: FontsEnum.Raleway,
    fontSize: 14,
    fontWeight: '600',
    color: '#FFF',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 4,
    width: '100%',
  },
  actionButton: {
    flex: 1,
  },
});
