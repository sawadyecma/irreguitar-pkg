import { Absnote, Chord } from "../sound/interfaces";
import { AnalyzedChord, ChordAnalyzer, Lentype } from "./interfaces";

type consist = {
    note: Absnote
    interval: number
}

export class ChordAnalyzerImpl implements ChordAnalyzer{
    analyze(chord: Chord): AnalyzedChord{
        const rootNote = chord.getRootNote()
        const notes = chord.getNotes()
        if (notes.length === 0){
            return {
                thirdType: "None",
                seventhType: "None",
            }
        }

        const consists: consist[] = notes.map((note)=>{
            return { note: note, interval: rootNote.diff(note) }
        })

        const highersByRoot = consists.filter((c)=>c.interval>0)
        const lowersByRoot = consists.filter((c)=>c.interval<0)

        // TODO 分数コードの結果もAnalyzedChordに追加する
        return {
            thirdType: this.getThirdType(highersByRoot),
            seventhType: this.getSeventhType(highersByRoot)
        }
    }

    private judgeLenType(
        containMinor: boolean,
        containMajor: boolean,
    ):Lentype{
        if (containMinor){
            if (containMajor){
                return "Invalid"
            }
            return "Minor"
        }
        if(containMajor){
            return "Major"
        }
    
        return "None"
    }

    private getThirdType(notes: consist[]): Lentype {
        const containMinor = notes.filter((note)=> note.interval%12 === 3).length > 0
        const containMajor = notes.filter((note)=> note.interval%12 === 4).length > 0
        return this.judgeLenType(containMinor, containMajor)
    }

    private getSeventhType(notes: consist[]): Lentype {
        const containMinor = notes.filter((note)=> note.interval%12 === 10).length > 0
        const containMajor = notes.filter((note)=> note.interval%12 === 11).length > 0
        return this.judgeLenType(containMinor, containMajor)
    }
}
