import { Absnote, Chord } from "../sound/interfaces";

export interface ChordParser {
	parse(chord: Chord): string
}

export interface ChordAnalyzer{
	analyze(chord: Chord):AnalyzedChord
}

export interface ChordNamer{
	name(chord: AnalyzedChord):string
}

// 長調か短調か
export type Lentype = "None" | "Major" | "Minor" | "Invalid"

export type AnalyzedChord = {
    thirdType: Lentype
    seventhType: Lentype
	lowersByRoot: Absnote[]
}