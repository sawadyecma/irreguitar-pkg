import { Absnote } from '..'
import { Thread, ThreadNum } from '../guitar/interfaces'
import { Turning } from './interfaces'

export class TurningImpl implements Turning {
  constructor(private threads: Map<ThreadNum, Thread>) {}

  getThreads(): Map<ThreadNum, Thread> {
    return this.threads
  }

  getThreadNums(): ThreadNum[] {
    return Array.from<ThreadNum>(this.threads.keys())
  }

  getNote(thnm: ThreadNum, flet: number): Absnote {
    const th = this.threads.get(thnm)
    if (th === undefined) {
      throw new Error('Unexpected thnm')
    }
    return th.getNote(flet)
  }

  getCompositionName(): string {
    const thNums = this.getThreadNums()
    const threads = this.getThreads()

    const descSortedThNums = thNums.sort((a, b) => b - a)

    return descSortedThNums
      .map((thnm) => {
        const thread = threads.get(thnm)
        if (!thread) throw new Error('Unexpected thnm')
        return thread.getOpenNote().getName({ onlyPrefix: true })
      })
      .join('')
  }
}
