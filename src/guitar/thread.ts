import { Absnote } from "../sound/interfaces";
import { Thread } from "./interfaces";

export class ThreadImpl implements Thread{
    private openNote: Absnote

    constructor(openNote: Absnote){
        this.openNote = openNote
    }

    getOpenNote(): Absnote {
        return this.openNote
    }

    getNote(flet: number): Absnote {
        return this.openNote.up(flet)
    }
}