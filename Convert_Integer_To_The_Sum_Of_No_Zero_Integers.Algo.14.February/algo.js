// 1317. Convert Integer to the sum of no zero integers



// No-Zero integer is a positive integer that does not contain any 0 in its decimal representation.

// Given an integer n, return a list of two integers [a, b] where:

// a and b are No-Zero integers.
// a + b = n
// The test cases are generated so that there is at least one valid solution. If there are many valid solutions, you can return any of them.








var getNoZeroIntegers = function (n) {
    let right = n;
    let arr = []
    for (let left = 0; left < n; left++) {
        if (right.toString().includes('0') || left.toString().includes('0')) {
            right--
            continue;
        } else {
            arr = [left, right]
            break;
        }

    }
    return arr
}