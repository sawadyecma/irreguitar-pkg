import { Absnotes } from "./absnotes";

export interface Absnote {
	getValue(): Absnotes
	name(): string
    up(halfToneDiff: number): Absnote
	diff(target: Absnote): number
}

export interface Chord {
	Name(): string
}

export interface ChordGenerator {
	Generate(root: Absnote, notes: Absnote[]): Chord
}

export interface ChordParser {
	Parse(root: Absnote, notes: Absnote[]): string
}