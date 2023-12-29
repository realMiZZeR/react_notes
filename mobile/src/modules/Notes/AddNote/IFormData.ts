import {NoteImportance} from '../NoteCard/NoteImportance.ts';

export interface IFormData {
  description: string;
  valuable: NoteImportance;
  date: Date;
  repeat: boolean;
}
