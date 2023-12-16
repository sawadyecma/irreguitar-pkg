import { Absnote } from '..'
import { Thread, ThreadNum } from '../guitar/interfaces'

export interface Turning {
  getThreads(): Map<ThreadNum, Thread>
  getThreadNums(): ThreadNum[]
  getNote(thnm: ThreadNum, flet: number): Absnote
  getCompositionName(): string
}
