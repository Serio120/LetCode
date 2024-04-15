/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    // Helper function to perform depth-first traversal
    var dfs = function(node, currentSum) {
        if (!node) return 0; // Base case
        
        // Update the current sum by appending the current node's value
        currentSum = currentSum * 10 + node.val;
        
        // If it's a leaf node, return the current sum
        if (!node.left && !node.right) {
            return currentSum;
        }
        
        // Recursively calculate sum for left and right subtrees
        return dfs(node.left, currentSum) + dfs(node.right, currentSum);
    };
    
    // Start the depth-first traversal from the root with initial sum as 0
    return dfs(root, 0);
};
