// 217. Contains Duplicate



// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.




/**
 * @param {number[]} nums
 * @return {boolean}

 - Given an integer array 'nums', return true if any value appears at least twice in the array
 - return false otherwise

 visted = new set
 iterate through array
    if set has number
        return true

 return false
 */
 var containsDuplicate = function (nums) {

    let visited = new Set()

    for (let num of nums) {
        if (visited.has(num)) {
            return true
        }

        visited.add(num)
    }

    return false
};