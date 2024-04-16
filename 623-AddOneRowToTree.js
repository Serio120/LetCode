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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    // If depth is 1, create a new root and return
    if (depth === 1) {
        return new TreeNode(val, root, null);
    }
    
    // Helper function to perform depth-first traversal and add nodes
    const dfs = (node, level) => {
        if (!node) return;
        
        // If the current level is the depth - 1, add new nodes
        if (level === depth - 1) {
            node.left = new TreeNode(val, node.left, null);
            node.right = new TreeNode(val, null, node.right);
        } else {
            // Continue traversing if not at the desired depth
            dfs(node.left, level + 1);
            dfs(node.right, level + 1);
        }
    };
    
    dfs(root, 1); // Start traversal from root at depth 1
    return root;
};
