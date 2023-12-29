import {NoteImportance} from './NoteImportance.ts';

export interface INote {
  id: number;
  description: string;
  date: Date;
  importance: NoteImportance;
}
