import { findCurrentWord } from "./formHelper";

describe("Form helper Tests", () => {
  it("When click in the beginning of the sentence", () => {
    expect(findCurrentWord("1", "how are you")).toEqual({
      currentWord: "how",
      startIndex: 0,
    });
  });
  it("When click in the middle of the sentence", () => {
    expect(findCurrentWord("5", "how are you")).toEqual({
      currentWord: "are",
      startIndex: 4,
    });
  });
  it("When click at the end of the sentence", () => {
    expect(findCurrentWord("12", "how are you")).toEqual({
      currentWord: "you",
      startIndex: 8,
    });
  });

  it("When click on a space", () => {
    expect(findCurrentWord("13", "how are you  ")).toEqual({
      currentWord: "",
      startIndex: 13,
    });
  });
});
