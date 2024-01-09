import {NoteImportance} from './NoteImportance.ts';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

export interface INote {
  id: string;
  userId: string;
  description: string;
  date: FirebaseFirestoreTypes.Timestamp;
  importance: NoteImportance;
  repeat: boolean;
}
