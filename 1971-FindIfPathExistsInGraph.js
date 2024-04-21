/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    // Build adjacency list from edges
    const graph = {};
    for (const [u, v] of edges) {
        if (!graph[u]) graph[u] = [];
        if (!graph[v]) graph[v] = [];
        graph[u].push(v);
        graph[v].push(u);
    }
    
    // DFS function
    const dfs = (node, visited) => {
        if (node === destination) return true; // Found destination
        visited.add(node);
        if (!graph[node]) return false;
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor, visited)) return true;
            }
        }
        return false;
    };
    
    // Start DFS from source
    return dfs(source, new Set());
};
