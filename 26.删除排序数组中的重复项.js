/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let p1 = 0

    while(p1<nums.length) {
        if(nums[p1+1] == nums[p1]) {
            nums.splice(p1+1,1)
        } else p1++
    }
    

    return nums.length
};
// @lc code=end

