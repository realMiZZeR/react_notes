import {NoteValuable} from './NoteValuable.ts';

export interface INote {
  id: number;
  valueable: NoteValuable;
  description: string;
  date: Date;
}
