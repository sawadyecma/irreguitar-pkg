import {
  AbsnoteImpl,
  Absnotes,
  Thread,
  ThreadImpl,
  ThreadNum,
  TurningImpl,
} from "..";

export const TURNING_CATALOG = {
  Regular: new TurningImpl(
    new Map<ThreadNum, Thread>([
      [6, new ThreadImpl(new AbsnoteImpl(Absnotes.E3))],
      [5, new ThreadImpl(new AbsnoteImpl(Absnotes.A4))],
      [4, new ThreadImpl(new AbsnoteImpl(Absnotes.D4))],
      [3, new ThreadImpl(new AbsnoteImpl(Absnotes.G4))],
      [2, new ThreadImpl(new AbsnoteImpl(Absnotes.B5))],
      [1, new ThreadImpl(new AbsnoteImpl(Absnotes.E5))],
    ])
  ),
  HalfDown: new TurningImpl(
    new Map<ThreadNum, Thread>([
      [6, new ThreadImpl(new AbsnoteImpl(Absnotes.Eb3))],
      [5, new ThreadImpl(new AbsnoteImpl(Absnotes.Ab4))],
      [4, new ThreadImpl(new AbsnoteImpl(Absnotes.Db4))],
      [3, new ThreadImpl(new AbsnoteImpl(Absnotes.Gb4))],
      [2, new ThreadImpl(new AbsnoteImpl(Absnotes.Bb5))],
      [1, new ThreadImpl(new AbsnoteImpl(Absnotes.Eb5))],
    ])
  ),
  DADGAD: new TurningImpl(
    new Map<ThreadNum, Thread>([
      [6, new ThreadImpl(new AbsnoteImpl(Absnotes.D3))],
      [5, new ThreadImpl(new AbsnoteImpl(Absnotes.A4))],
      [4, new ThreadImpl(new AbsnoteImpl(Absnotes.D4))],
      [3, new ThreadImpl(new AbsnoteImpl(Absnotes.G4))],
      [2, new ThreadImpl(new AbsnoteImpl(Absnotes.A5))],
      [1, new ThreadImpl(new AbsnoteImpl(Absnotes.D5))],
    ])
  ),
  DropD: new TurningImpl(
    new Map<ThreadNum, Thread>([
      [6, new ThreadImpl(new AbsnoteImpl(Absnotes.D3))],
      [5, new ThreadImpl(new AbsnoteImpl(Absnotes.A4))],
      [4, new ThreadImpl(new AbsnoteImpl(Absnotes.D4))],
      [3, new ThreadImpl(new AbsnoteImpl(Absnotes.G4))],
      [2, new ThreadImpl(new AbsnoteImpl(Absnotes.B5))],
      [1, new ThreadImpl(new AbsnoteImpl(Absnotes.E5))],
    ])
  ),
  DAEDbAE: new TurningImpl(
    new Map<ThreadNum, Thread>([
      [6, new ThreadImpl(new AbsnoteImpl(Absnotes.D3))],
      [5, new ThreadImpl(new AbsnoteImpl(Absnotes.A4))],
      [4, new ThreadImpl(new AbsnoteImpl(Absnotes.E4))],
      [3, new ThreadImpl(new AbsnoteImpl(Absnotes.A4))],
      [2, new ThreadImpl(new AbsnoteImpl(Absnotes.Db5))],
      [1, new ThreadImpl(new AbsnoteImpl(Absnotes.E5))],
    ])
  ),
};
