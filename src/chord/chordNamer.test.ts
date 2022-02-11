import { AbsnoteImpl } from "../sound/absnote";
import { Absnotes } from "../sound/absnotes";
import { Chord } from "../sound/interfaces";
import { ChordNamerImpl } from "./chordNamer";
import { AnalyzedChord } from "./interfaces";

describe("name", () => {
  const cn = new ChordNamerImpl();

  describe("test by C ChordMock", () => {
    const ChordMock = jest.fn<Chord, []>();
    ChordMock.mockImplementation(() => {
      return {
        getRootNote: () => {
          return new AbsnoteImpl(Absnotes.C3);
        },
        getNotes: () => {
          return [];
        },
      };
    });

    test("C", () => {
      const analyzed: AnalyzedChord = {
        thirdType: "None",
        seventhType: "None",
        lowersByRoot: [],
      };
      const got = cn.name(new ChordMock(), analyzed);
      expect(got).toBe("C(omit3)");
    });

    test("CM7", () => {
      const analyzed: AnalyzedChord = {
        thirdType: "Major",
        seventhType: "Major",
        lowersByRoot: [],
      };
      const got = cn.name(new ChordMock(), analyzed);
      expect(got).toBe("CM7");
    });

    test("Cm7/D", () => {
      const analyzed: AnalyzedChord = {
        thirdType: "Minor",
        seventhType: "Minor",
        lowersByRoot: [new AbsnoteImpl(Absnotes.D2)],
      };
      const got = cn.name(new ChordMock(), analyzed);
      expect(got).toBe("Cm7/D");
    });

    test("CmM7/E", () => {
      const analyzed: AnalyzedChord = {
        thirdType: "Minor",
        seventhType: "Major",
        lowersByRoot: [new AbsnoteImpl(Absnotes.E2)],
      };
      const got = cn.name(new ChordMock(), analyzed);
      expect(got).toBe("CmM7/E");
    });

    test("CM7(omit3)", () => {
      const analyzed: AnalyzedChord = {
        thirdType: "None",
        seventhType: "Major",
        lowersByRoot: [],
      };
      const got = cn.name(new ChordMock(), analyzed);
      expect(got).toBe("CM7(omit3)");
    });

    test("undefined by third", () => {
      const analyzed: AnalyzedChord = {
        thirdType: "Invalid",
        seventhType: "Major",
        lowersByRoot: [],
      };
      const got = cn.name(new ChordMock(), analyzed);
      expect(got).toBeUndefined();
    });

    test("undefined by seventh", () => {
      const analyzed: AnalyzedChord = {
        thirdType: "Major",
        seventhType: "Invalid",
        lowersByRoot: [],
      };
      const got = cn.name(new ChordMock(), analyzed);
      expect(got).toBeUndefined();
    });

    test("undefined by on chord", () => {
      const analyzed: AnalyzedChord = {
        thirdType: "Major",
        seventhType: "Major",
        lowersByRoot: [
          new AbsnoteImpl(Absnotes.D2),
          new AbsnoteImpl(Absnotes.E2),
        ],
      };
      cn.name(new ChordMock(), analyzed);
    });
  });
});
