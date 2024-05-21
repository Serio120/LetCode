/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];
    
    const generateSubsets = (index, currentSubset) => {
        if (index === nums.length) {
            result.push([...currentSubset]);
            return;
        }
        
        // Decision to include nums[index]
        currentSubset.push(nums[index]);
        generateSubsets(index + 1, currentSubset);
        
        // Decision to not include nums[index]
        currentSubset.pop();
        generateSubsets(index + 1, currentSubset);
    };
    
    generateSubsets(0, []);
    return result;
};

// Example usage:
console.log(subsets([1,2,3]));  // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets([0]));      // [[],[0]]
