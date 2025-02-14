// 1975. Maximum Matrix Sum



// You are given an n x n integer matrix. You can do the following operation any number of times:

// Choose any two adjacent elements of matrix and multiply each of them by -1.
// Two elements are considered adjacent if and only if they share a border.

// Your goal is to maximize the summation of the matrix's elements. Return the maximum sum of the matrix's elements using the operation mentioned above.









/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function (matrix) {
    let ROW = matrix.length
    let COL = matrix[0].length

    let allNumTotal = 0
    let smallestValue = Infinity
    let AmountOfNegativeNums = 0

    for (let r = 0; r < ROW; r++) {
        for (let c = 0; c < COL; c++) {
            let num = matrix[r][c]
            if (num > 0) {
                allNumTotal += num
            } else {
                let positiveNum = Math.abs(num)
                allNumTotal += positiveNum
                AmountOfNegativeNums += 1
            }

            smallestValue = Math.min(Math.abs(num), smallestValue)
        }
    }

    if (AmountOfNegativeNums % 2 !== 0) {
        allNumTotal -= smallestValue * 2
    }

    return allNumTotal
};