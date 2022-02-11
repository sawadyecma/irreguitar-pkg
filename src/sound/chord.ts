import { Absnote, Chord } from "./interfaces";

export class ChordImpl implements Chord {
  private rootNote: Absnote;
  private notes: Absnote[];

  constructor(rootNote: Absnote, notes: Absnote[]) {
    this.rootNote = rootNote;
    this.notes = notes;
  }

  getRootNote(): Absnote {
    return this.rootNote;
  }

  getNotes(): Absnote[] {
    return this.notes;
  }
}
