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

  add(note: INote) {
    firestore()
      .collection('Notes')
      .add(note)
      .then(() => this.internalFetch());
  }

  edit(note: INote) {
    firestore()
      .collection('Notes')
      .doc(note.id)
      .update(note)
      .then(() => this.internalFetch());
  }

  remove(id: string) {
    firestore()
      .collection('Notes')
      .doc(id)
      .delete()
      .then(() => this.internalFetch());
  }

  async fetch(userId: string) {
    this.setIsLoading(true);
    this._userId = userId;
    this.notes = [];

    try {
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
    } catch (err) {
      console.error(`NotesStore.fetch(${userId}) error: ${err}`);
    } finally {
      this.setIsLoading(false);
    }
  }

  private fill(note: INote) {
    this.notes = [...this.notes, note];
  }

  private setIsLoading(value: boolean) {
    this.isLoading = value;
  }

  private async internalFetch() {
    if (!this._userId) {
      return;
    }
    await this.fetch(this._userId);
  }
}
