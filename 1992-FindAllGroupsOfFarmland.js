/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function(land) {
    const result = [];
    
    const dfs = (r, c) => {
        if (r < 0 || r >= land.length || c < 0 || c >= land[0].length || land[r][c] === 0) {
            return;
        }
        let bottomRightRow = r;
        let bottomRightCol = c;
        while (bottomRightRow + 1 < land.length && land[bottomRightRow + 1][c] === 1) {
            bottomRightRow++;
        }
        while (bottomRightCol + 1 < land[0].length && land[r][bottomRightCol + 1] === 1) {
            bottomRightCol++;
        }
        for (let i = r; i <= bottomRightRow; i++) {
            for (let j = c; j <= bottomRightCol; j++) {
                land[i][j] = 0; // mark as visited
            }
        }
        result.push([r, c, bottomRightRow, bottomRightCol]);
    };
    
    for (let i = 0; i < land.length; i++) {
        for (let j = 0; j < land[0].length; j++) {
            if (land[i][j] === 1) {
                dfs(i, j);
            }
        }
    }
    
    return result;
};
