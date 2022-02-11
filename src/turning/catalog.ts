import { Thread, ThreadNum } from "../guitar/interfaces";
import { ThreadImpl } from "../guitar/thread";
import { AbsnoteImpl } from "../sound/absnote";
import { Absnotes } from "../sound/absnotes";
import { TurningImpl } from "./turning";

export const TURNING_CATALOG = {
  Regular: new TurningImpl(
    new Map<ThreadNum, Thread>([
      [6, new ThreadImpl(new AbsnoteImpl(Absnotes.E3))],
      [5, new ThreadImpl(new AbsnoteImpl(Absnotes.A4))],
      [4, new ThreadImpl(new AbsnoteImpl(Absnotes.D5))],
      [3, new ThreadImpl(new AbsnoteImpl(Absnotes.G5))],
      [2, new ThreadImpl(new AbsnoteImpl(Absnotes.B5))],
      [1, new ThreadImpl(new AbsnoteImpl(Absnotes.E6))],
    ])
  ),
  HalfDown: new TurningImpl(
    new Map<ThreadNum, Thread>([
      [6, new ThreadImpl(new AbsnoteImpl(Absnotes.Eb3))],
      [5, new ThreadImpl(new AbsnoteImpl(Absnotes.Ab4))],
      [4, new ThreadImpl(new AbsnoteImpl(Absnotes.Db5))],
      [3, new ThreadImpl(new AbsnoteImpl(Absnotes.Gb5))],
      [2, new ThreadImpl(new AbsnoteImpl(Absnotes.Bb5))],
      [1, new ThreadImpl(new AbsnoteImpl(Absnotes.Eb6))],
    ])
  ),
  DADGAD: new TurningImpl(
    new Map<ThreadNum, Thread>([
      [6, new ThreadImpl(new AbsnoteImpl(Absnotes.D3))],
      [5, new ThreadImpl(new AbsnoteImpl(Absnotes.A4))],
      [4, new ThreadImpl(new AbsnoteImpl(Absnotes.D5))],
      [3, new ThreadImpl(new AbsnoteImpl(Absnotes.G5))],
      [2, new ThreadImpl(new AbsnoteImpl(Absnotes.A5))],
      [1, new ThreadImpl(new AbsnoteImpl(Absnotes.D6))],
    ])
  ),
  DropD: new TurningImpl(
    new Map<ThreadNum, Thread>([
      [6, new ThreadImpl(new AbsnoteImpl(Absnotes.D3))],
      [5, new ThreadImpl(new AbsnoteImpl(Absnotes.A4))],
      [4, new ThreadImpl(new AbsnoteImpl(Absnotes.D5))],
      [3, new ThreadImpl(new AbsnoteImpl(Absnotes.G5))],
      [2, new ThreadImpl(new AbsnoteImpl(Absnotes.B5))],
      [1, new ThreadImpl(new AbsnoteImpl(Absnotes.E6))],
    ])
  ),
  DAEDbAE: new TurningImpl(
    new Map<ThreadNum, Thread>([
      [6, new ThreadImpl(new AbsnoteImpl(Absnotes.D3))],
      [5, new ThreadImpl(new AbsnoteImpl(Absnotes.A4))],
      [4, new ThreadImpl(new AbsnoteImpl(Absnotes.E5))],
      [3, new ThreadImpl(new AbsnoteImpl(Absnotes.A5))],
      [2, new ThreadImpl(new AbsnoteImpl(Absnotes.Db6))],
      [1, new ThreadImpl(new AbsnoteImpl(Absnotes.E6))],
    ])
  ),
};
