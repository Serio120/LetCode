/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const result = [];

    // Helper function to check if a string is a palindrome
    const isPalindrome = (str) => {
        let left = 0, right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    };

    // Backtracking function to find all palindrome partitions
    const backtrack = (start, path) => {
        if (start === s.length) {
            result.push([...path]);
            return;
        }

        for (let end = start + 1; end <= s.length; end++) {
            const substring = s.slice(start, end);
            if (isPalindrome(substring)) {
                path.push(substring);
                backtrack(end, path);
                path.pop();
            }
        }
    };

    backtrack(0, []);
    return result;
};

// Example usage:
console.log(partition("aab")); // [["a","a","b"],["aa","b"]]
console.log(partition("a"));   // [["a"]]
