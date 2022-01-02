import { AbsnoteImpl } from "../sound/absnote"
import { Absnotes } from "../sound/absnotes"
import { ChordImple } from "../sound/chord"
import { ChordAnalyzerImpl } from "./chordAnalyzer"
import { AnalyzedChord } from "./interfaces"

describe('ChordAnalyzerImpl',()=>{
    describe('analyze',()=>{
        const ca = new ChordAnalyzerImpl()

        test('C(omit3)', ()=>{
            const chord = new ChordImple(
                new AbsnoteImpl(Absnotes.C3),
                [],
            )
            const got = ca.analyze(chord)
            const want: AnalyzedChord = {
                thirdType: "None",
                seventhType: "None",
                lowersByRoot: [],
            }
            expect(got).toEqual(want)
        })

        test('C(Major)', ()=>{
            const chord = new ChordImple(
                new AbsnoteImpl(Absnotes.C3),
                [
                    new AbsnoteImpl(Absnotes.E3),
                    new AbsnoteImpl(Absnotes.G3),
                ],
            )
            const got = ca.analyze(chord)
            const want: AnalyzedChord = {
                thirdType: "Major",
                seventhType: "None",
                lowersByRoot: [],
            }
            expect(got).toEqual(want)
        })

        test('Cm', ()=>{
            const chord = new ChordImple(
                new AbsnoteImpl(Absnotes.C3),
                [
                    new AbsnoteImpl(Absnotes.Eb3),
                    new AbsnoteImpl(Absnotes.G3),
                ],
            )
            const got = ca.analyze(chord)
            const want: AnalyzedChord = {
                thirdType: "Minor",
                seventhType: "None",
                lowersByRoot: [],
            }
            expect(got).toEqual(want)
        })

        test('CM7', ()=>{
            const chord = new ChordImple(
                new AbsnoteImpl(Absnotes.C3),
                [
                    new AbsnoteImpl(Absnotes.E3),
                    new AbsnoteImpl(Absnotes.G3),
                    new AbsnoteImpl(Absnotes.B3),
                ],
            )
            const got = ca.analyze(chord)
            const want: AnalyzedChord = {
                thirdType: "Major",
                seventhType: "Major",
                lowersByRoot: [],
            }
            expect(got).toEqual(want)
        })

        test('Cm7', ()=>{
            const chord = new ChordImple(
                new AbsnoteImpl(Absnotes.C3),
                [
                    new AbsnoteImpl(Absnotes.Eb3),
                    new AbsnoteImpl(Absnotes.G3),
                    new AbsnoteImpl(Absnotes.Bb3),
                ],
            )
            const got = ca.analyze(chord)
            const want: AnalyzedChord = {
                thirdType: "Minor",
                seventhType: "Minor",
                lowersByRoot: [],
            }
            expect(got).toEqual(want)
        })

        test('CmM7', ()=>{
            const chord = new ChordImple(
                new AbsnoteImpl(Absnotes.C3),
                [
                    new AbsnoteImpl(Absnotes.Eb3),
                    new AbsnoteImpl(Absnotes.G3),
                    new AbsnoteImpl(Absnotes.B3),
                ],
            )
            const got = ca.analyze(chord)
            const want: AnalyzedChord = {
                thirdType: "Minor",
                seventhType: "Major",
                lowersByRoot: [],
            }
            expect(got).toEqual(want)
        })
    })
})