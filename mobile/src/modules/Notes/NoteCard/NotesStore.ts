import firestore from '@react-native-firebase/firestore';
import {makeAutoObservable} from 'mobx';
import {INote} from './INote.ts';

interface test extends INote {
  key: string;
}

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

  async fetch() {
    const notesQuery = await firestore().collection('Notes').get();
    const notes = notesQuery.docs.map(note => note.data() as INote);
    firestore()
      .collection('Notes')
      .onSnapshot(snapshot => {});
    console.log(notes);
  }
}
