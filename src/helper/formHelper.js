export const findCurrentWord = (cursorPosition, newTweet) => {
  const lastEnterIndex = newTweet.lastIndexOf("\n", cursorPosition-1);
  const lastSpaceIndex = newTweet.lastIndexOf(" ", cursorPosition-1);
  const startIndex = Math.max(lastEnterIndex, lastSpaceIndex) + 1;

  /* 1. in the middle of a sentence */
  /* 2. at the end of a sentence */
  const nextSpaceIndex = newTweet.slice(startIndex).match(/\s/);

  const endIndex = nextSpaceIndex
    ? startIndex + nextSpaceIndex.index
    : newTweet.length;

  const currentWord = newTweet.slice(startIndex, endIndex);

  return { currentWord, startIndex };
};

