/* (Statement)********************************************************
EASY
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.
**********************************************************************/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let len = 0;
    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] !== ' ') {
        len++;
      } else if (len > 0) {
        break;
      }
    }
    return len;
  };
