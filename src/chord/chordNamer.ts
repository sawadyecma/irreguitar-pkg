import { Chord } from "../sound/interfaces";
import { AnalyzedChord, ChordNamer, Lentype } from "./interfaces";

export class ChordNamerImpl implements ChordNamer {
  name(chord: Chord, analyzed: AnalyzedChord): string | undefined {
    const rootNote = chord.getRootNote();
    const stdChordType = this.stdChordType(analyzed);

    if (stdChordType === undefined) {
      return undefined;
    }

    switch (analyzed.lowersByRoot.length) {
      case 0:
        return `${rootNote.getName({ onlyPrefix: true })}${stdChordType}`;
      case 1:
        return `${rootNote.getName({
          onlyPrefix: true,
        })}${stdChordType}/${analyzed.lowersByRoot[0].getName({
          onlyPrefix: true,
        })}`;
      default:
        return undefined;
    }
  }

  private stdChordType(analyzed: AnalyzedChord): string | undefined {
    return analyzedTransfomer[analyzed.thirdType][analyzed.seventhType];
  }
}

const analyzedTransfomer: {
  // Third
  [key in Lentype]: {
    // Seventh
    [key in Lentype]?: string;
  };
} = {
  None: {
    None: "(omit3)",
    Major: "M7(omit3)",
    Minor: "m7(omit3)",
    Invalid: undefined,
  },
  Major: {
    None: "",
    Major: "M7",
    Minor: "7",
    Invalid: undefined,
  },
  Minor: {
    None: "m",
    Major: "mM7",
    Minor: "m7",
    Invalid: undefined,
  },
  Invalid: {
    None: undefined,
    Major: undefined,
    Minor: undefined,
    Invalid: undefined,
  },
};
