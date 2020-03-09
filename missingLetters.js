/*
  Missing Letters
  ===============
  Find the missing letter in the passed letter range and return it.
  If all letters are present in the range, return undefined.
  ==================================================================
*/

let alphabet = 'abcdefghijklmnopqrstuvwxyz';

const fearNotLetter = str => {
  const startIdx = alphabet.indexOf(str[0]);
  for (let i = startIdx, j = 0; i < str.length, j < str.length; i++, j++) {
    if (str[j] !== alphabet[i]) return alphabet[i];
  }
};

console.log(fearNotLetter('stvwx'));
fearNotLetter('abce'); // "d"
fearNotLetter('abcdefghjklmno'); // "i"
fearNotLetter('stvwx'); // "u"
fearNotLetter('bcdf'); // "e"
fearNotLetter('abcdefghijklmnopqrstuvwxyz'); // undefined
