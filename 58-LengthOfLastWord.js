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

/*
Explanation:

Trim the string: We use s.trim() to remove any leading or trailing whitespaces from the input string. This ensures we don't count extra spaces at the beginning or end as part of the last word.

Iterate from the back: We iterate through the string starting from the last character (index s.length - 1). This allows us to efficiently find the last non-space character which marks the beginning of the last word.

Track word length: We use a variable len to keep track of the current word length.

Check for spaces and non-spaces:

If the current character is not a space (s[i] !== ' '), we increment len as it's part of the word.
If the current character is a space (s[i] === ' '), and len is already greater than 0, it means we've found a space after a word. In this case, we break the loop as we don't need to iterate further.
Return length: Finally, after the loop finishes, len will hold the length of the last word, which is returned by the function.

This approach avoids unnecessary iterations and handles cases with empty strings or strings consisting only of spaces effectively.
*/
