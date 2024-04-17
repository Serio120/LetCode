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
 * @return {string}
 */
var smallestFromLeaf = function(root) {
    let smallestString = '~'; // '~' is lexicographically greater than 'z'
    dfs(root, '');
    return smallestString;
    
    function dfs(node, currentString) {
        if (!node) return;
        
        currentString = String.fromCharCode(97 + node.val) + currentString; // Convert node value to character
        
        if (!node.left && !node.right) { // Leaf node
            if (currentString < smallestString) {
                smallestString = currentString;
            }
            return;
        }
        
        dfs(node.left, currentString);
        dfs(node.right, currentString);
    }
};
