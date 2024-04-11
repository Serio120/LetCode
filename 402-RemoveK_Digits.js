/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    const stack = [];
    let remaining = num.length - k;

    for (const digit of num) {
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }

    // If there are still remaining digits to remove, remove them from the end
    stack.splice(remaining);

    // Remove leading zeros
    let i = 0;
    while (i < stack.length && stack[i] === '0') {
        i++;
    }
    stack.splice(0, i);

    // Return the result
    return stack.length === 0 ? '0' : stack.join('');
};
