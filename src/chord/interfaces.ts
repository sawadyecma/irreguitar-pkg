import { Absnote, Chord } from "../sound/interfaces";

export interface ChordParser {
  parse(chord: Chord): string | undefined;
}

export interface ChordAnalyzer {
  analyze(chord: Chord): AnalyzedChord;
}

export interface ChordNamer {
  name(chord: Chord, analyzed: AnalyzedChord): string | undefined;
}

// 長調か短調か
export type Lentype = "None" | "Major" | "Minor" | "Invalid";

export type NinethType = "None" | "Valid" | "Invalid";

export type AnalyzedChord = {
  thirdType: Lentype;
  seventhType: Lentype;
  ninethType: NinethType;
  lowersByRoot: Absnote[];
};
