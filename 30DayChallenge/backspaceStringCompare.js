/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

// attempted DP but in the end stuck with using memory. using somethng like 2-pointers is 
// definitely a way to make it work without memory usage

const hashify = (s) => {
    let backspaces = 0;
    for(let i=s.length-1;i>=0;i--) {
        if(s[i] !== '#') {
            if(backspaces >= 1) {
                backspaces-=1
                s[i] = '#'
            }
        } else {
            backspaces+=1
        }
    }
    return s.filter(char => char !== '#');
}
var backspaceCompare = function(s, t) {
    
    const sArr = Array.from(s)
    const tArr = Array.from(t)
    const hashedS = hashify(sArr)
    const hashedT = hashify(tArr)
    
    for(let i=0;i<hashedS.length;i++) {
        if(hashedS[i] !== hashedT[i]) return false
    }
    return true
};
