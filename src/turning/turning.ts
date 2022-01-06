import { Absnote } from "..";
import { Thread, ThreadNum } from "../guitar/interfaces";
import { Turning } from "./interfaces";

export class TurningImpl implements Turning{
    private threads: Map<ThreadNum, Thread>

    constructor(threads: Map<ThreadNum, Thread>){
        this.threads = threads
    }
    
    Threads():Map<ThreadNum, Thread>{
        return this.threads
    }

    ThreadNums(): ThreadNum[]{
        return Array.from<ThreadNum>(this.threads.keys())
    }

    Note(thnm: ThreadNum, flet: number): Absnote{
        const th = this.threads.get(thnm)
        if (th === undefined){
            throw new Error("Unexpected thnm")
        }
        return th.getNote(flet)
    }
}