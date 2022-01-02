import { AbsnoteImpl } from "../sound/absnote"
import { Absnotes } from "../sound/absnotes"
import { Chord } from "../sound/interfaces"
import { ChordNamerImpl } from "./chordNamer"
import { AnalyzedChord } from "./interfaces"

describe("name",()=>{
    const cn = new ChordNamerImpl()

    describe("test by C ChordMock",()=>{
        const ChordMock = jest.fn<Chord, []>();
        ChordMock.mockImplementation(()=>{
            return {
                getRootNote: ()=>{
                    return new AbsnoteImpl(Absnotes.C3)
                },
                getNotes: ()=>{
                    return []
                }
            }
        })

        test("C",()=>{
            const analyzed: AnalyzedChord = {
                thirdType: "None",
                seventhType: "None",
                lowersByRoot: [],
            }
            cn.name(new ChordMock(), analyzed)
        })

        test("CM7",()=>{
            const analyzed: AnalyzedChord = {
                thirdType: "Major",
                seventhType: "Major",
                lowersByRoot: [],
            }
            cn.name(new ChordMock(), analyzed)
        })

        test("Cm7/D",()=>{
            const analyzed: AnalyzedChord = {
                thirdType: "Minor",
                seventhType: "Minor",
                lowersByRoot: [new AbsnoteImpl(Absnotes.D2)],
            }
            cn.name(new ChordMock(), analyzed)
        })

        test("CmM7/E",()=>{
            const analyzed: AnalyzedChord = {
                thirdType: "Minor",
                seventhType: "Major",
                lowersByRoot: [new AbsnoteImpl(Absnotes.E2)],
            }
            cn.name(new ChordMock(), analyzed)
        })

        test("CM7(omit3)",()=>{
            const analyzed: AnalyzedChord = {
                thirdType: "None",
                seventhType: "Major",
                lowersByRoot: [],
            }
            cn.name(new ChordMock(), analyzed)
        })

        test("undefined by third",()=>{
            const analyzed: AnalyzedChord = {
                thirdType: "Invalid",
                seventhType: "Major",
                lowersByRoot: [],
            }
            cn.name(new ChordMock(), analyzed)
        })

        test("undefined by seventh",()=>{
            const analyzed: AnalyzedChord = {
                thirdType: "Major",
                seventhType: "Invalid",
                lowersByRoot: [],
            }
            cn.name(new ChordMock(), analyzed)
        })

        test("undefined by on chord",()=>{
            const analyzed: AnalyzedChord = {
                thirdType: "Major",
                seventhType: "Major",
                lowersByRoot: [
                    new AbsnoteImpl(Absnotes.D2),
                    new AbsnoteImpl(Absnotes.E2),
                ],
            }
            cn.name(new ChordMock(), analyzed)
        })
    })
})