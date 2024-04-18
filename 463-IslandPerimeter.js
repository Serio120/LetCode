/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let perimeter = 0;
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) { // Found land cell
                // Check adjacent cells
                if (i === 0 || grid[i - 1][j] === 0) perimeter++; // Top
                if (i === rows - 1 || grid[i + 1][j] === 0) perimeter++; // Bottom
                if (j === 0 || grid[i][j - 1] === 0) perimeter++; // Left
                if (j === cols - 1 || grid[i][j + 1] === 0) perimeter++; // Right
            }
        }
    }
    
    return perimeter;
};
