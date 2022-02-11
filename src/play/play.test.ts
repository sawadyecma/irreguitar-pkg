import { AbsnoteImpl, Absnotes, ChordImpl, TURNING_CATALOG } from "..";
import { PlayImpl } from "./play";

describe("PlayImpl", () => {
  test("正常系", () => {
    const play = new PlayImpl(TURNING_CATALOG.Regular);

    const got = play.getChord({ threadNum: 5, flet: 3 }, [
      { threadNum: 4, flet: 2 },
      { threadNum: 3, flet: 0 },
    ]);
    const want = new ChordImpl(new AbsnoteImpl(Absnotes.C5), [
      new AbsnoteImpl(Absnotes.E5),
      new AbsnoteImpl(Absnotes.G5),
    ]);

    expect(got).toEqual(want);
  });
});
