import { Absnote } from "..";
import { Thread, ThreadNum } from "../guitar/interfaces";

export interface Turning {
    Threads():Map<ThreadNum, Thread>
    ThreadNums(): ThreadNum[]
    Note(thnm: ThreadNum, flet: number):Absnote
}