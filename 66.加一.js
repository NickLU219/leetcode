/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let p= digits.length-1
    digits[p] = digits[p]+1
    while(p>=0) {
        if(digits[p]==10) {
            digits[p] = 0
            p == 0 ? digits.unshift(1) : digits[p-1]+=1
        }
        p--
    }
    return digits
};
// @lc code=end

