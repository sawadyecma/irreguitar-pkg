import { NinethType } from "..";
import { Absnote, Chord } from "../sound/interfaces";
import { AnalyzedChord, ChordAnalyzer, Lentype } from "./interfaces";

export class ChordAnalyzerImpl implements ChordAnalyzer {
  analyze(chord: Chord): AnalyzedChord {
    const rootNote = chord.getRootNote();
    const notes = chord.getNotes();
    if (notes.length === 0) {
      return {
        thirdType: "None",
        seventhType: "None",
        ninethType: "None",
        lowersByRoot: [],
      };
    }

    const highersByRoot = notes.filter((note) => rootNote.diff(note) > 0);
    const lowersByRoot = notes.filter((note) => rootNote.diff(note) < 0);

    return {
      thirdType: this.getThirdType(rootNote, highersByRoot),
      seventhType: this.getSeventhType(rootNote, highersByRoot),
      ninethType: this.getNinethType(rootNote, highersByRoot),
      lowersByRoot: lowersByRoot,
    };
  }

  private judgeLenType(containMinor: boolean, containMajor: boolean): Lentype {
    if (containMinor) {
      if (containMajor) {
        return "Invalid";
      }
      return "Minor";
    }
    if (containMajor) {
      return "Major";
    }

    return "None";
  }

  private getThirdType(rootNote: Absnote, notes: Absnote[]): Lentype {
    const containMinor =
      notes.filter((note) => rootNote.diff(note) % 12 === 3).length > 0;
    const containMajor =
      notes.filter((note) => rootNote.diff(note) % 12 === 4).length > 0;
    return this.judgeLenType(containMinor, containMajor);
  }

  private getSeventhType(rootNote: Absnote, notes: Absnote[]): Lentype {
    const containMinor =
      notes.filter((note) => rootNote.diff(note) % 12 === 10).length > 0;
    const containMajor =
      notes.filter((note) => rootNote.diff(note) % 12 === 11).length > 0;
    return this.judgeLenType(containMinor, containMajor);
  }

  private getNinethType(rootNote: Absnote, notes: Absnote[]): NinethType {
    const containNineth =
      notes.filter((note) => {
        const diff = rootNote.diff(note);
        return diff >= 14 && diff % 12 === 2;
      }).length > 0;
    const containObstacleForNineth =
      notes.filter((note) => {
        const diff = rootNote.diff(note);
        return diff >= 14 && [1, 3].includes(diff % 12);
      }).length > 0;

    return containNineth
      ? containObstacleForNineth
        ? "Invalid"
        : "Valid"
      : "None";
  }
}
