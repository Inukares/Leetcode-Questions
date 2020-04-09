var topKFrequent = function(nums, k) {
    const hash = {};
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        hash[num] = ~~hash[num] + 1       
    }
    return Object
        .keys(hash)
        .sort((a, b) => hash[a] <= hash[b] ? 1 : -1)
        .splice(0, k);
};
