/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(n, edges) {
    const graph = Array.from({length: n}, () => []);
    const count = Array(n).fill(1);
    const res = Array(n).fill(0);
    
    for (let [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }
    
    const dfs = (root, pre) => {
        for (let i of graph[root]) {
            if (i === pre) continue;
            dfs(i, root);
            count[root] += count[i];
            res[root] += res[i] + count[i];
        }
    }
    
    const dfs2 = (root, pre) => {
        for (let i of graph[root]) {
            if (i === pre) continue;
            res[i] = res[root] - count[i] + n - count[i];
            dfs2(i, root);
        }
    }
    
    dfs(0, -1);
    dfs2(0, -1);
    
    return res;
};
