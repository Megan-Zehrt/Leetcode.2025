// 1219. Path with Maximum Gold



// In a gold mine grid of size m x n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.

// Return the maximum amount of gold you can collect under the conditions:

// Every time you are located in a cell you will collect all the gold in that cell.
// From your position, you can walk one step to the left, right, up, or down.
// You can't visit the same cell more than once.
// Never visit a cell with 0 gold.
// You can start and stop collecting gold from any position in the grid that has some gold.






/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {

    let maxGold = 0;
    let ROW = grid.length;
    let COL = grid[0].length;

    function helper(row, col, visited) {

        // Base case: If the cell is out of bounds or the cell is empty (0) or already visited
        if (row < 0 || row >= ROW || col < 0 || col >= COL || grid[row][col] === 0 || visited.has(row + ',' + col)) {
            return 0;
        }

        // Mark the current cell as visited
        visited.add(row + ',' + col);

        // Explore all 4 possible directions and calculate the maximum gold collected
        let maxGoldFromCurrent = grid[row][col] +
            Math.max(
                helper(row + 1, col, visited),
                helper(row - 1, col, visited),
                helper(row, col + 1, visited),
                helper(row, col - 1, visited)
            );

        // Unmark the current cell as visited after finishing exploring from this cell
        visited.delete(row + ',' + col);

        return maxGoldFromCurrent;
    }

    // Traverse the grid and start from each cell that is not visited and contains gold
    for (let r = 0; r < ROW; r++) {
        for (let c = 0; c < COL; c++) {
            if (grid[r][c] !== 0) {
                maxGold = Math.max(maxGold, helper(r, c, new Set()));
            }
        }
    }

    return maxGold;
};
