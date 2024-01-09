import firestore from '@react-native-firebase/firestore';
import {makeAutoObservable} from 'mobx';
import {INote} from './NoteCard/INote.ts';

export class NotesStore {
  public notes: INote[];
  public isLoading: boolean;

  // ID пользователя, к которому относятся данные записи.
  private _userId: string | null;

  constructor() {
    this.notes = [];
    this.isLoading = false;
    this._userId = null;
    makeAutoObservable(this);
  }

  setUserId(userId: string) {
    this._userId = userId;
  }

  add(note: INote) {
    firestore()
      .collection('Notes')
      .add(note)
      .then(() => {
        this.fetch();
      });
  }

  edit(note: INote) {
    firestore()
      .collection('Notes')
      .doc(note.id)
      .update(note)
      .then(() => {
        this.fetch();
      });
  }

  remove(id: string) {
    firestore()
      .collection('Notes')
      .doc(id)
      .delete()
      .then(() => this.fetch());
  }

  async fetch() {
    this.setIsLoading(true);
    this.notes = [];

    const collection = await firestore()
      .collection('Notes')
      .where('userId', '==', this._userId)
      .get();

    collection.docs.forEach(doc => {
      const data = doc.data() as INote;
      const note: INote = {
        ...data,
        id: doc.id,
      };

      this.fill(note);
    });

    this.setIsLoading(false);
  }

  private fill(note: INote) {
    this.notes = [...this.notes, note];
  }

  private setIsLoading(value: boolean) {
    this.isLoading = value;
  }
}
