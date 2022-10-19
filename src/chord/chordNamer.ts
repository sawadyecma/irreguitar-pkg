import { NinethType } from '..'
import { Chord } from '../sound/interfaces'
import { AnalyzedChord, ChordNamer, Lentype } from './interfaces'

export class ChordNamerImpl implements ChordNamer {
  name(chord: Chord, analyzed: AnalyzedChord): string | undefined {
    const rootNote = chord.getRootNote()
    const stdChordType = this.stdChordType(analyzed)

    if (stdChordType === undefined) {
      return undefined
    }

    switch (analyzed.lowersByRoot.length) {
      case 0:
        return `${rootNote.getName({ onlyPrefix: true })}${stdChordType}`
      case 1:
        return `${rootNote.getName({
          onlyPrefix: true,
        })}${stdChordType}/${analyzed.lowersByRoot[0].getName({
          onlyPrefix: true,
        })}`
      default:
        return undefined
    }
  }

  private stdChordType(analyzed: AnalyzedChord): string | undefined {
    return analyzedTransfomer[analyzed.thirdType]?.[analyzed.seventhType]?.[
      analyzed.ninethType
    ]
  }
}

const analyzedTransfomer: {
  // 3rd
  [key in Lentype]?: {
    // 7th
    [key in Lentype]?: {
      // 9th
      [key in NinethType]?: string
    }
  }
} = {
  None: {
    None: {
      None: '(omit3)',
      Valid: 'add9(omit3)',
      Invalid: undefined,
    },
    Major: {
      None: 'M7(omit3)',
      Valid: 'M9(omit3)',
      Invalid: undefined,
    },
    Minor: {
      None: '7(omit3)',
      Valid: '9(omit3)',
      Invalid: undefined,
    },
    Invalid: undefined,
  },
  Major: {
    None: {
      None: '',
      Valid: 'add9',
      Invalid: undefined,
    },
    Major: {
      None: 'M7',
      Valid: 'M9',
      Invalid: undefined,
    },
    Minor: {
      None: '7',
      Valid: '9',
      Invalid: undefined,
    },
    Invalid: undefined,
  },
  Minor: {
    None: {
      None: 'm',
      Valid: 'madd9',
      Invalid: undefined,
    },
    Major: {
      None: 'mM7',
      Valid: 'mM9',
      Invalid: undefined,
    },
    Minor: {
      None: 'm7',
      Valid: 'm9',
      Invalid: undefined,
    },
    Invalid: undefined,
  },
  Invalid: undefined,
}
