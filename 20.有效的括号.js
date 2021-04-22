/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let map ={
        "{": "}",
        "(": ")",
        "[": "]"
    }
    // let rs = s.split().reverse().join()
    // console.log(rs)
    let temp = ''
    for(let i = 0; i< s.length; i++) {
        console.log(s[i], temp.length, map[temp[temp.length-1]])
        if(s[i] == map[temp[temp.length-1]]){
            
            console.log(temp)
            temp = temp.substr(0,temp.length-1)
            console.log(temp)
        }
        else {
            temp+=s[i]
            console.log(temp)
        }
    }
    return !temp
};
// @lc code=end

