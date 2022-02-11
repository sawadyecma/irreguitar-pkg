import { Absnotes } from "./absnotes";

export interface Absnote {
  getValue(): Absnotes;
  getName(opt?: { onlyPrefix?: boolean }): string;
  up(halfToneDiff: number): Absnote;
  diff(target: Absnote): number;
}

export interface Chord {
  getRootNote(): Absnote;
  getNotes(): Absnote[];
}

export interface ChordFactory {
  Create(rootNote: Absnote, notes: Absnote[]): Chord;
}
