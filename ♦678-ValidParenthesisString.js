/**
 * @param {string} s
 * @return {boolean}
 */


var checkValidString = function(s) {
    let low = 0; // The lowest possible number of '('
    let high = 0; // The highest possible number of '('
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            low++;
            high++;
        } else if (s[i] === ')') {
            // If we treat '*' as ')'
            if (low > 0) low--;
            high--;
        } else { // '*' encountered
            // If we treat '*' as '('
            if (low > 0) low--;
            // If we treat '*' as ')'
            high++;
        }
        // If at any point, the number of ')' could be greater than '(', it's invalid
        if (high < 0) return false;
    }
    
    // If 'low' is 0 at the end, it means all '(' have been matched with ')'
    return low === 0;
};


