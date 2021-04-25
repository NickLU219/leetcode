/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let ar = a.split("").reverse().map(i => +i)
    let br = b.split("").reverse().map(i => +i)
    
    let sumr = [0]
    let p = 0

    while(p<Math.max(ar.length,br.length)) {
        sumr[p] = (sumr[p]??0) +( (ar[p]??0) + (br[p]??0))
        if(sumr[p]>=2) {
            sumr[p]-=2
            sumr[p+1] = 1
        }
        p++
    }

    return sumr.reverse().join('')

};
// @lc code=end

