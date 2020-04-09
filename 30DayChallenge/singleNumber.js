/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let dict = {}
    for(let i=0;i<nums.length;i++){
        dict[nums[i]] = ~~dict[nums[i]]+1
    }
    for(const [key, value] of Object.entries(dict)) {
        if(value !== 2) return key;
    }
};
