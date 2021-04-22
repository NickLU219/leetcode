/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let sym = x<0? -1: 1
    x = x<0? -x: x
    let newX=0
    while(x>0) {
        newX = newX*10 + x%10
        x = Math.floor(x/10)
    }
    if(newX * sym<-Math.pow(2,31) || newX * sym>Math.pow(2,31)-1) return 0
    return newX * sym
};
// @lc code=end

