// Valid Anagram



// Given two strings s and t, return true if t is an anagram of s, and false otherwise.




/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(s.length != t.length) return false

    let sortedS = s.split('').sort().join('')
    let sortedT = t.split('').sort().join('')

    if(sortedS == sortedT){
        return true
    }

    return false
    
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    let map = new Map()

    if(s.length !== t.length) return false

    for(let letter of s){

        map.set(letter, (map.get(letter) || 0) + 1)
    }

    for(let letter of t){

        if(map.has(letter)){
            map.set(letter, (map.get(letter) - 1))

            if(map.get(letter) == 0){
                map.delete(letter)
            }
        } else{
            return false
        }
    }
    
    return map.size == 0 ? true : false
};