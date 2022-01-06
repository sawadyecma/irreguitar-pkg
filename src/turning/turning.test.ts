import { AbsnoteImpl, Absnotes } from ".."
import { Thread, ThreadNum } from "../guitar/interfaces"
import { ThreadImpl } from "../guitar/thread"
import { TurningImpl } from "./turning"

describe("Regular Turning",()=>{
    
    const t = new TurningImpl(
        new Map<ThreadNum, Thread>([
            [6, new ThreadImpl(new AbsnoteImpl(Absnotes.E3))],
            [5, new ThreadImpl(new AbsnoteImpl(Absnotes.A4))],
            [4, new ThreadImpl(new AbsnoteImpl(Absnotes.D4))],
            [3, new ThreadImpl(new AbsnoteImpl(Absnotes.G4))],
            [2, new ThreadImpl(new AbsnoteImpl(Absnotes.B5))],
            [1, new ThreadImpl(new AbsnoteImpl(Absnotes.E5))],
        ])
    )

    test("getThreadNums",()=>{
        expect(t.getThreadNums()).toEqual([6,5,4,3,2,1])
    })

    test("getNote",()=>{
        expect(t.getNote(6,3)).toEqual(new AbsnoteImpl(Absnotes.G3))
        expect(t.getNote(5,0)).toEqual(new AbsnoteImpl(Absnotes.A4))
        expect(t.getNote(4,12)).toEqual(new AbsnoteImpl(Absnotes.D5))
    })

})