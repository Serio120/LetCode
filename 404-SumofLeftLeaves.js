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
var sumOfLeftLeaves = function(root) {
    if (!root) return 0; // If root is null, return 0
    
    let sum = 0;
    
    // Check if the left child of the current node is a leaf
    if (root.left && !root.left.left && !root.left.right) {
        sum += root.left.val; // Add the value of the left leaf to sum
    }
    
    // Recursively check the left and right subtrees
    sum += sumOfLeftLeaves(root.left); // Check left subtree
    sum += sumOfLeftLeaves(root.right); // Check right subtree
    
    return sum;
};
