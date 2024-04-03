/*
Given an m x n grid of characters board and a string word, return true if word exists in the grid.
The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are
horizontally or vertically neighboring. The same letter cell may not be used more than once.
*/


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    
    const dfs = (i, j, index) => {
        if (index === word.length) return true;
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[index]) return false;
        
        const temp = board[i][j];
        board[i][j] = '*'; // mark the character as visited
        
        const result = dfs(i+1, j, index+1) || dfs(i-1, j, index+1) || dfs(i, j+1, index+1) || dfs(i, j-1, index+1);
        
        board[i][j] = temp; // reset the character to its original value
        
        return result;
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === word[0] && dfs(i, j, 0)) {
                return true;
            }
        }
    }
    
    return false;
};
