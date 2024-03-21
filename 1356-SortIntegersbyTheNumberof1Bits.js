/*
You are given an integer array arr. Sort the integers in the array in ascending 
order by the number of 1's in their binary representation and in case of two or
more integers have the same number of 1's you have to sort them in ascending order.

Return the array after sorting it.


Runtime
70
ms
Beats
70.31%
of users with JavaScript
Memory
52.33
MB
Beats
62.81%
of users with JavaScript
*/



/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    // Custom sorting function
    const customSort = (a, b) => {
        const countA = countOnes(a);
        const countB = countOnes(b);
        
        if (countA === countB) {
            return a - b; // If same number of 1's, sort by value
        }
        return countA - countB; // Otherwise, sort by count of 1's
    };
    
    // Helper function to count 1's in binary representation
    const countOnes = (num) => {
        let count = 0;
        while (num > 0) {
            count += num & 1;
            num >>= 1;
        }
        return count;
    };
    
    // Sort thearr using custom sorting function
    arr.sort(customSort);
    return arr;
};

