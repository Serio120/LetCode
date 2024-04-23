/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if (n === 1) return [0]; // Special case when there's only one node
    
    // Create adjacency list representation of the tree
    const adjList = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) {
        adjList[a].push(b);
        adjList[b].push(a);
    }
    
    // Initialize leaves queue with nodes that have only one neighbor
    const leaves = [];
    for (let i = 0; i < n; i++) {
        if (adjList[i].length === 1) leaves.push(i);
    }
    
    // Continue removing leaves until only one or two nodes are left
    while (n > 2) {
        const size = leaves.length;
        n -= size;
        for (let i = 0; i < size; i++) {
            const leaf = leaves.shift();
            const neighbor = adjList[leaf].pop(); // Remove the leaf node
            adjList[neighbor] = adjList[neighbor].filter(node => node !== leaf); // Remove the edge
            if (adjList[neighbor].length === 1) leaves.push(neighbor); // Check if the neighbor becomes a leaf
        }
    }
    
    return leaves; // The remaining nodes are the roots of MHTs
};
