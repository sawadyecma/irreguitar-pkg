import { Absnotes } from "./absnotes";

export interface Absnote {
	getValue(): Absnotes
	getName(): string
    up(halfToneDiff: number): Absnote
	diff(target: Absnote): number
}

export interface Chord {
	getRootNote(): Absnote
	getNotes(): Absnote[]
}