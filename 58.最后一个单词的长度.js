/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.replace(/\s*$/g,'')
    return /\S\w*$/.exec(s)?.[0]?.length ?? 0
};
// @lc code=end

