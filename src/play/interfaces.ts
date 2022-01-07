import { Chord } from "..";
import { ThreadNum } from "../guitar/interfaces";

export  interface Play{
    getChord(rootPress: Press, presses: Press[]):Chord
}

export interface Press{
    threadNum: ThreadNum
    flet: number
}