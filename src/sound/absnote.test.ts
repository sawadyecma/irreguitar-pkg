import { AbsnoteImpl } from "./absnote"
import { Absnotes } from "./absnotes"

describe('getValue', ()=>{
    test('A4',()=>{
        const a = new AbsnoteImpl(Absnotes.A4)
        const ret = a.getValue()
        expect(ret).toBe(Absnotes.A4)
    })

    test('C6',()=>{
        const a = new AbsnoteImpl(Absnotes.C6)
        const ret = a.getValue()
        expect(ret).toBe(Absnotes.C6)
    })
})

describe('name', ()=>{
    test('A4',()=>{
        const a = new AbsnoteImpl(Absnotes.A4)
        const ret = a.name()
        expect(ret).toBe("A4")
    })

    test('B2',()=>{
        const a = new AbsnoteImpl(Absnotes.B2)
        const ret = a.name()
        expect(ret).toBe("B2")
    })
})

describe('up',()=>{
    test('A4+3=>C5',()=>{
        const a = new AbsnoteImpl(Absnotes.A4)
        const ret = a.up(+3).getValue()
        expect(ret).toBe(Absnotes.C5)
    })

    test('A4-2=>G4',()=>{
        const a = new AbsnoteImpl(Absnotes.A4)
        const ret = a.up(-2).getValue()
        expect(ret).toBe(Absnotes.G4)
    })

    test('C1-1=>Error',()=>{
        const a = new AbsnoteImpl(Absnotes.C1)
        expect(()=>{
            a.up(-1)
        }).toThrowError()
    })

    test('B6+1=>Error',()=>{
        const a = new AbsnoteImpl(Absnotes.B6)
        expect(()=>{
            a.up(+1)
        }).toThrowError()
    })
})

describe('diff', () => {
    test('A4-G4=+2',()=>{
        const got = new AbsnoteImpl(Absnotes.G4).
            diff(new AbsnoteImpl(Absnotes.A4))
        expect(got).toBe(+2)
    })

    test('G4-A4=-2',()=>{
        const got = new AbsnoteImpl(Absnotes.A4).
            diff(new AbsnoteImpl(Absnotes.G4))
        expect(got).toBe(-2)
    })

    test('C2-C1=+12',()=>{
        const got = new AbsnoteImpl(Absnotes.C1).
            diff(new AbsnoteImpl(Absnotes.C2))
        expect(got).toBe(+12)
    })
})
