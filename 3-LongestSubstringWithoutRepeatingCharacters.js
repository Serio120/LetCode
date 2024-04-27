

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let start = 0;
    let charIndexMap = new Map(); // Map to store the index of each character
    
    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];
        if (charIndexMap.has(currentChar)) {
            // Move the start pointer to the index after the last occurrence of the current character
            start = Math.max(start, charIndexMap.get(currentChar) + 1);
        }
        // Update the index of the current character
        charIndexMap.set(currentChar, end);
        // Update the maximum length
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
};

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
