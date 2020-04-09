/**
 * @param {number} n
 * @return {boolean}
 */



var isHappy = function(n, memo={}) {
    if(n===1) return true
    if(n===4) return false
    
    return isHappy(
        String(n).split('').
        reduce((accumulator, current) => {
            if(!memo[current]) memo[current] = Math.pow(current, 2)
            return accumulator + memo[current]
        }, 0), memo)
    
};
