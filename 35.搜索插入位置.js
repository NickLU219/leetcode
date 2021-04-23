/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let p = 0
    while(p<nums.length) {
        if(nums[p] >= target) {
            return p
        }else if(nums[p]<target) {
            p++
        }
    }
    return nums.length
};
// @lc code=end

