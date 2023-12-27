import {NoteValuable} from '../NoteCard/NoteValuable.ts';

export interface IFormData {
  description: string;
  valuable: NoteValuable;
  date: Date;
  repeat: boolean;
}
