/* (Statement)********************************************************
EASY
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.
**********************************************************************/

public class Solution {
  public int LengthOfLastWord(string s) {
    // Remove trailing whitespaces
    s = s.TrimEnd();

    int len = 0;
    for (int i = s.Length - 1; i >= 0; i--) {
      if (s[i] != ' ') {
        len++;
      } else if (len > 0) {
        break;
      }
    }
    return len;
  }
}
