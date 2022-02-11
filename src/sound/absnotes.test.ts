import { Absnotes, getAbsnote } from "./absnotes";

describe("getAbsnote", () => {
  test("C1", (): void => {
    const got = getAbsnote("C1");
    expect(got.absnote).toBe(Absnotes.C1);
    expect(got.success).toBe(true);
  });

  test("A4", (): void => {
    const got = getAbsnote("A4");
    expect(got.absnote).toBe(Absnotes.A4);
    expect(got.success).toBe(true);
  });

  test("C100", (): void => {
    const got = getAbsnote("C100");
    expect(got.absnote).toBe(undefined);
    expect(got.success).toBe(false);
  });
});
