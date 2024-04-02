/*Statement  ***************
Easy
Given two strings s and t, determine if they are isomorphic.
Two strings s and t are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
*/

const isIsomorphic = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  const map = {};
  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];
    if (map[charS] === undefined) {
      if (Object.values(map).includes(charT)) {
        return false;
      }
      map[charS] = charT;
    } else if (map[charS] !== charT) {
      return false;
    }
  }
  return true;
};
