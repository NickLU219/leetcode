/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle == "") return 0
    let p = -1,i=0
    let length = needle.length
    while(i<=haystack.length-length) {
        console.log(haystack.substr(i,length))
        if(haystack.substr(i,length) == needle) {
            p = i
            break
        }
        else i++
    }
    return p
};
// @lc code=end

