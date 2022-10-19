import { AbsnoteImpl } from '../sound/absnote'
import { Absnotes } from '../sound/absnotes'
import { Chord } from '../sound/interfaces'
import { ChordNamerImpl } from './chordNamer'
import { AnalyzedChord } from './interfaces'

describe('name', () => {
  const cn = new ChordNamerImpl()

  describe('test by C ChordMock', () => {
    const ChordMock = jest.fn<Chord, []>()
    ChordMock.mockImplementation(() => {
      return {
        getRootNote: () => {
          return new AbsnoteImpl(Absnotes.C3)
        },
        getNotes: () => {
          return []
        },
      }
    })

    test('C', () => {
      const analyzed: AnalyzedChord = {
        thirdType: 'None',
        seventhType: 'None',
        ninethType: 'None',
        lowersByRoot: [],
      }
      const got = cn.name(new ChordMock(), analyzed)
      expect(got).toBe('C(omit3)')
    })

    test('CM7', () => {
      const analyzed: AnalyzedChord = {
        thirdType: 'Major',
        seventhType: 'Major',
        ninethType: 'None',
        lowersByRoot: [],
      }
      const got = cn.name(new ChordMock(), analyzed)
      expect(got).toBe('CM7')
    })

    test('Cm7/D', () => {
      const analyzed: AnalyzedChord = {
        thirdType: 'Minor',
        seventhType: 'Minor',
        ninethType: 'None',
        lowersByRoot: [new AbsnoteImpl(Absnotes.D2)],
      }
      const got = cn.name(new ChordMock(), analyzed)
      expect(got).toBe('Cm7/D')
    })

    test('CmM7/E', () => {
      const analyzed: AnalyzedChord = {
        thirdType: 'Minor',
        seventhType: 'Major',
        ninethType: 'None',
        lowersByRoot: [new AbsnoteImpl(Absnotes.E2)],
      }
      const got = cn.name(new ChordMock(), analyzed)
      expect(got).toBe('CmM7/E')
    })

    test('CM7(omit3)', () => {
      const analyzed: AnalyzedChord = {
        thirdType: 'None',
        seventhType: 'Major',
        ninethType: 'None',
        lowersByRoot: [],
      }
      const got = cn.name(new ChordMock(), analyzed)
      expect(got).toBe('CM7(omit3)')
    })

    test('undefined by third', () => {
      const analyzed: AnalyzedChord = {
        thirdType: 'Invalid',
        seventhType: 'Major',
        ninethType: 'None',
        lowersByRoot: [],
      }
      const got = cn.name(new ChordMock(), analyzed)
      expect(got).toBeUndefined()
    })

    test('undefined by seventh', () => {
      const analyzed: AnalyzedChord = {
        thirdType: 'Major',
        seventhType: 'Invalid',
        ninethType: 'None',
        lowersByRoot: [],
      }
      const got = cn.name(new ChordMock(), analyzed)
      expect(got).toBeUndefined()
    })

    test('undefined by on chord', () => {
      const analyzed: AnalyzedChord = {
        thirdType: 'Major',
        seventhType: 'Major',
        ninethType: 'None',
        lowersByRoot: [
          new AbsnoteImpl(Absnotes.D2),
          new AbsnoteImpl(Absnotes.E2),
        ],
      }
      const got = cn.name(new ChordMock(), analyzed)
      expect(got).toBeUndefined()
    })

    describe('基本的なadd9', () => {
      test('Cadd9', () => {
        const analyzed: AnalyzedChord = {
          thirdType: 'Major',
          seventhType: 'None',
          ninethType: 'Valid',
          lowersByRoot: [],
        }
        const got = cn.name(new ChordMock(), analyzed)
        expect(got).toBe('Cadd9')
      })

      test('Cmadd9', () => {
        const analyzed: AnalyzedChord = {
          thirdType: 'Minor',
          seventhType: 'None',
          ninethType: 'Valid',
          lowersByRoot: [],
        }
        const got = cn.name(new ChordMock(), analyzed)
        expect(got).toBe('Cmadd9')
      })

      test('Cadd9(omit3)', () => {
        const analyzed: AnalyzedChord = {
          thirdType: 'None',
          seventhType: 'None',
          ninethType: 'Valid',
          lowersByRoot: [],
        }
        const got = cn.name(new ChordMock(), analyzed)
        expect(got).toBe('Cadd9(omit3)')
      })
    })

    describe('omit3な9th', () => {
      test('C9(omit3)', () => {
        const analyzed: AnalyzedChord = {
          thirdType: 'None',
          seventhType: 'Minor',
          ninethType: 'Valid',
          lowersByRoot: [],
        }
        const got = cn.name(new ChordMock(), analyzed)
        expect(got).toBe('C9(omit3)')
      })

      test('CM9(omit3)', () => {
        const analyzed: AnalyzedChord = {
          thirdType: 'None',
          seventhType: 'Major',
          ninethType: 'Valid',
          lowersByRoot: [],
        }
        const got = cn.name(new ChordMock(), analyzed)
        expect(got).toBe('CM9(omit3)')
      })
    })

    describe('7thがMinorな9th', () => {
      test('C9', () => {
        const analyzed: AnalyzedChord = {
          thirdType: 'Major',
          seventhType: 'Minor',
          ninethType: 'Valid',
          lowersByRoot: [],
        }
        const got = cn.name(new ChordMock(), analyzed)
        expect(got).toBe('C9')
      })

      test('Cm9', () => {
        const analyzed: AnalyzedChord = {
          thirdType: 'Minor',
          seventhType: 'Minor',
          ninethType: 'Valid',
          lowersByRoot: [],
        }
        const got = cn.name(new ChordMock(), analyzed)
        expect(got).toBe('Cm9')
      })
    })

    describe('7thがMajorな9th', () => {
      test('CM9', () => {
        const analyzed: AnalyzedChord = {
          thirdType: 'Major',
          seventhType: 'Major',
          ninethType: 'Valid',
          lowersByRoot: [],
        }
        const got = cn.name(new ChordMock(), analyzed)
        expect(got).toBe('CM9')
      })

      test('CmM9', () => {
        const analyzed: AnalyzedChord = {
          thirdType: 'Minor',
          seventhType: 'Major',
          ninethType: 'Valid',
          lowersByRoot: [],
        }
        const got = cn.name(new ChordMock(), analyzed)
        expect(got).toBe('CmM9')
      })
    })
  })
})
