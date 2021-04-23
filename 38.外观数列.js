/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n == 1) return 1+''
    else {
        //对countAndSay(n-1)的描述
        
        let nm = countAndSay(n-1)
        let p = 0,tmp='',count=0,str=''
        console.log(nm)

        while(p<nm.length) {
            if(nm[p]!=tmp) {
                if(count != 0) {
                    str+=count+tmp
                }
                tmp = nm[p]
                count=1
            }else {
                count++
            }
            p++
        }
        return str+count+""+tmp
    }
};
// @lc code=end

