/**
 * @param {string} s
 * @return {string}
 */

var makeGood = function(s) {
    let stack = [];
    
    for (let char of s) {
        let prev = stack[stack.length - 1];
        
        if (prev && Math.abs(char.charCodeAt(0) - prev.charCodeAt(0)) === 32) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    
    return stack.join('');
};
