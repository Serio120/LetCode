/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let maxGold = 0;

    const dfs = (row, col, currentGold) => {
        if (
            row < 0 || row >= rows ||
            col < 0 || col >= cols ||
            grid[row][col] === 0
        ) {
            return;
        }

        const goldInCurrentCell = grid[row][col];
        currentGold += goldInCurrentCell;
        maxGold = Math.max(maxGold, currentGold);

        const temp = grid[row][col];
        grid[row][col] = 0; // Marking as visited

        // Explore all four directions
        dfs(row + 1, col, currentGold); // Down
        dfs(row - 1, col, currentGold); // Up
        dfs(row, col + 1, currentGold); // Right
        dfs(row, col - 1, currentGold); // Left

        // Backtrack
        grid[row][col] = temp; // Restoring the grid value
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] !== 0) {
                dfs(i, j, 0);
            }
        }
    }

    return maxGold;
};

// Test cases
console.log(getMaximumGold([[0,6,0],[5,8,7],[0,9,0]])); // Output: 24
console.log(getMaximumGold([[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]])); // Output: 28
