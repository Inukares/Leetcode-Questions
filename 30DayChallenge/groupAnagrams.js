const groupAnagrams = function(strs) {
    let map = {}
    
    for (let str of strs) {
        let key = [...str].sort()
        map[key] = map[key] ? [...map[key], str] : [str]
    }
    
    return Object.values(map)
};
