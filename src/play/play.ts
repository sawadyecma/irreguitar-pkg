import { ChordImpl } from "..";
import { Absnote, Chord, ChordFactory } from "../sound/interfaces";
import { Turning } from "../turning/interfaces";
import { Play, Press } from "./interfaces";

export class PlayImpl implements Play {
  constructor(
    private turning: Turning,
    private chordFactory: ChordFactory = new ChordFactoryImpl()
  ) {}

  getChord(rootPress: Press, presses: Press[]): Chord {
    const threads = this.turning.getThreads();
    const rootNote = threads.get(rootPress.threadNum)?.getNote(rootPress.flet);
    if (rootNote === undefined) {
      throw new Error("rootNote is not found");
    }

    const notes = presses.map((press) => {
      const note = threads.get(press.threadNum)?.getNote(press.flet);
      if (note === undefined) {
        throw new Error("note is not found");
      }
      return note;
    });
    return this.chordFactory.Create(rootNote, notes);
  }
}

class ChordFactoryImpl implements ChordFactory {
  Create(rootNote: Absnote, notes: Absnote[]): Chord {
    return new ChordImpl(rootNote, notes);
  }
}
