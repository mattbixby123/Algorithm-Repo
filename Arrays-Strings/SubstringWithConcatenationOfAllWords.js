/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
export const findSubstring = function (s, words) {
  const result = [];
  const wordLength = words[0].length;
  const totalLength = wordLength * words.length;

  // Create a frequency map of words
  const wordFreq = new Map();
  for (const word of words) {
    wordFreq.set(word, (wordFreq.get(word) || 0) + 1);
  }

  // Iterate through possible starting positions
  for (let i = 0; i <= s.length - totalLength; i++) {
    const seenWords = new Map();
    let j;

    // Check each word in the current window
    for (j = 0; j < words.length; j++) {
      const start = i + j * wordLength;
      const word = s.slice(start, start + wordLength);

      if (!wordFreq.has(word)) break;

      seenWords.set(word, (seenWords.get(word) || 0) + 1);

      if (seenWords.get(word) > wordFreq.get(word)) break;
    }

    // If all words are found in correct frequency, add starting index to result
    if (j === words.length) result.push(i);
  }

  return result;
};