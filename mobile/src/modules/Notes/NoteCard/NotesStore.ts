import {makeAutoObservable} from 'mobx';
import {INote} from './INote.ts';

export class NotesStore {
  public notes: INote[];

  constructor() {
    this.notes = [];
    makeAutoObservable(this);
  }

  add(note: INote) {
    this.notes = [...this.notes, note];
    console.log(this.notes);
  }

  remove() {}

  fetch() {}
}
