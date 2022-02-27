import { AbsnoteImpl } from "../sound/absnote";
import { Absnotes } from "../sound/absnotes";
import { ChordImpl } from "../sound/chord";
import { ChordAnalyzerImpl } from "./chordAnalyzer";
import { AnalyzedChord } from "./interfaces";

describe("ChordAnalyzerImpl", () => {
  describe("analyze", () => {
    const ca = new ChordAnalyzerImpl();

    test("C(omit3)", () => {
      const chord = new ChordImpl(new AbsnoteImpl(Absnotes.C3), []);
      const got = ca.analyze(chord);
      const want: AnalyzedChord = {
        thirdType: "None",
        seventhType: "None",
        ninethType: "None",
        lowersByRoot: [],
      };
      expect(got).toEqual(want);
    });

    test("C(Major)", () => {
      const chord = new ChordImpl(new AbsnoteImpl(Absnotes.C3), [
        new AbsnoteImpl(Absnotes.E3),
        new AbsnoteImpl(Absnotes.G3),
      ]);
      const got = ca.analyze(chord);
      const want: AnalyzedChord = {
        thirdType: "Major",
        seventhType: "None",
        ninethType: "None",
        lowersByRoot: [],
      };
      expect(got).toEqual(want);
    });

    test("Cm", () => {
      const chord = new ChordImpl(new AbsnoteImpl(Absnotes.C3), [
        new AbsnoteImpl(Absnotes.Eb3),
        new AbsnoteImpl(Absnotes.G3),
      ]);
      const got = ca.analyze(chord);
      const want: AnalyzedChord = {
        thirdType: "Minor",
        seventhType: "None",
        ninethType: "None",
        lowersByRoot: [],
      };
      expect(got).toEqual(want);
    });

    test("CM7", () => {
      const chord = new ChordImpl(new AbsnoteImpl(Absnotes.C3), [
        new AbsnoteImpl(Absnotes.E3),
        new AbsnoteImpl(Absnotes.G3),
        new AbsnoteImpl(Absnotes.B3),
      ]);
      const got = ca.analyze(chord);
      const want: AnalyzedChord = {
        thirdType: "Major",
        seventhType: "Major",
        ninethType: "None",
        lowersByRoot: [],
      };
      expect(got).toEqual(want);
    });

    test("Cm7", () => {
      const chord = new ChordImpl(new AbsnoteImpl(Absnotes.C3), [
        new AbsnoteImpl(Absnotes.Eb3),
        new AbsnoteImpl(Absnotes.G3),
        new AbsnoteImpl(Absnotes.Bb3),
      ]);
      const got = ca.analyze(chord);
      const want: AnalyzedChord = {
        thirdType: "Minor",
        seventhType: "Minor",
        ninethType: "None",
        lowersByRoot: [],
      };
      expect(got).toEqual(want);
    });

    test("CmM7", () => {
      const chord = new ChordImpl(new AbsnoteImpl(Absnotes.C3), [
        new AbsnoteImpl(Absnotes.Eb3),
        new AbsnoteImpl(Absnotes.G3),
        new AbsnoteImpl(Absnotes.B3),
      ]);
      const got = ca.analyze(chord);
      const want: AnalyzedChord = {
        thirdType: "Minor",
        seventhType: "Major",
        ninethType: "None",
        lowersByRoot: [],
      };
      expect(got).toEqual(want);
    });

    test("Cadd9", () => {
      const chord = new ChordImpl(new AbsnoteImpl(Absnotes.C3), [
        new AbsnoteImpl(Absnotes.E3),
        new AbsnoteImpl(Absnotes.G3),
        new AbsnoteImpl(Absnotes.D4),
      ]);
      const got = ca.analyze(chord);
      const want: AnalyzedChord = {
        thirdType: "Major",
        seventhType: "None",
        ninethType: "Valid",
        lowersByRoot: [],
      };
      expect(got).toEqual(want);
    });

    test("C9", () => {
      const chord = new ChordImpl(new AbsnoteImpl(Absnotes.C3), [
        new AbsnoteImpl(Absnotes.E3),
        new AbsnoteImpl(Absnotes.G3),
        new AbsnoteImpl(Absnotes.Bb3),
        new AbsnoteImpl(Absnotes.D4),
      ]);
      const got = ca.analyze(chord);
      const want: AnalyzedChord = {
        thirdType: "Major",
        seventhType: "Minor",
        ninethType: "Valid",
        lowersByRoot: [],
      };
      expect(got).toEqual(want);
    });

    test("CM9", () => {
      const chord = new ChordImpl(new AbsnoteImpl(Absnotes.C3), [
        new AbsnoteImpl(Absnotes.E3),
        new AbsnoteImpl(Absnotes.G3),
        new AbsnoteImpl(Absnotes.B3),
        new AbsnoteImpl(Absnotes.D4),
      ]);
      const got = ca.analyze(chord);
      const want: AnalyzedChord = {
        thirdType: "Major",
        seventhType: "Major",
        ninethType: "Valid",
        lowersByRoot: [],
      };
      expect(got).toEqual(want);
    });
    test("Cmadd9", () => {
      const chord = new ChordImpl(new AbsnoteImpl(Absnotes.C3), [
        new AbsnoteImpl(Absnotes.Eb3),
        new AbsnoteImpl(Absnotes.G3),
        new AbsnoteImpl(Absnotes.D4),
      ]);
      const got = ca.analyze(chord);
      const want: AnalyzedChord = {
        thirdType: "Minor",
        seventhType: "None",
        ninethType: "Valid",
        lowersByRoot: [],
      };
      expect(got).toEqual(want);
    });

    test("Cm9", () => {
      const chord = new ChordImpl(new AbsnoteImpl(Absnotes.C3), [
        new AbsnoteImpl(Absnotes.Eb3),
        new AbsnoteImpl(Absnotes.G3),
        new AbsnoteImpl(Absnotes.Bb3),
        new AbsnoteImpl(Absnotes.D4),
      ]);
      const got = ca.analyze(chord);
      const want: AnalyzedChord = {
        thirdType: "Minor",
        seventhType: "Minor",
        ninethType: "Valid",
        lowersByRoot: [],
      };
      expect(got).toEqual(want);
    });

    test("CmM9", () => {
      const chord = new ChordImpl(new AbsnoteImpl(Absnotes.C3), [
        new AbsnoteImpl(Absnotes.Eb3),
        new AbsnoteImpl(Absnotes.G3),
        new AbsnoteImpl(Absnotes.B3),
        new AbsnoteImpl(Absnotes.D4),
      ]);
      const got = ca.analyze(chord);
      const want: AnalyzedChord = {
        thirdType: "Minor",
        seventhType: "Major",
        ninethType: "Valid",
        lowersByRoot: [],
      };
      expect(got).toEqual(want);
    });
  });
});
