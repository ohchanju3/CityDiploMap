// 받침 유무에 따라 조사 '와/과' 적절히 배치

export const withPostposition = (
  word: string,
  josa: [string, string]
): string => {
  const lastChar = word[word.length - 1];
  const code = lastChar.charCodeAt(0) - 44032;

  const jong = code % 28;
  return word + (jong === 0 ? josa[1] : josa[0]);
};
