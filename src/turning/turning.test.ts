import { AbsnoteImpl, Absnotes } from "..";
import { Thread, ThreadNum } from "../guitar/interfaces";
import { ThreadImpl } from "../guitar/thread";
import { TURNING_CATALOG } from "./catalog";
import { TurningImpl } from "./turning";

describe("Regular Turning", () => {
  const t = TURNING_CATALOG.Regular;

  test("getThreadNums", () => {
    expect(t.getThreadNums()).toEqual([6, 5, 4, 3, 2, 1]);
  });

  test("getNote", () => {
    expect(t.getNote(6, 3)).toEqual(new AbsnoteImpl(Absnotes.G3));
    expect(t.getNote(5, 0)).toEqual(new AbsnoteImpl(Absnotes.A4));
    expect(t.getNote(4, 12)).toEqual(new AbsnoteImpl(Absnotes.D5));
  });
});
