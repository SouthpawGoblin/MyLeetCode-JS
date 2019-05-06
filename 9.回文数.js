/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    let strx = x.toString();
    let midInd = Math.floor(strx.length / 2);
    let leftRev = strx.slice(0, midInd).split('').reverse().join('');
    return leftRev === strx.slice(strx.length - midInd);
};

