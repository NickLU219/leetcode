/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let p1 = 0

    while(p1<nums.length) {
        if(nums[p1] == val) {
            nums.splice(p1,1)
        } else p1++
    }
    

    return nums.length
};
// @lc code=end

