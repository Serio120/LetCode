/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function(customfunction, z) {
    let result = [];
    let x = 1;
    let y = 1000; // As the function's output fits in a 32-bit signed integer, we start with the maximum value of y

    while (x <= 1000 && y >= 1) {
        let value = customfunction.f(x, y);
        if (value === z) {
            result.push([x, y]);
            x++;
            y--;
        } else if (value < z) {
            x++;
        } else {
            y--;
        }
    }
    
    return result;
};
