/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
  if(sentence1 === sentence2) return true;

  let s1Arr = sentence1.split(" ");
  let s2Arr = sentence2.split(" ");

  while(s1Arr.at(0) === s2Arr.at(0)){
      s1Arr.shift()
      s2Arr.shift()
  }


  while(s1Arr.at(-1) === s2Arr.at(-1)){
      s1Arr.pop()
      s2Arr.pop()
  }

  return !s1Arr.length || !s2Arr.length;
};