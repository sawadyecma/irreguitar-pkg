import { Absnote } from "../sound/interfaces";

export interface Thread {
    getOpenNote(): Absnote
	getNote(flet: number): Absnote
}

export type ThreadNum = number