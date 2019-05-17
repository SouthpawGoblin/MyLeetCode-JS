/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let i = 0;
    let j = 0;
    let overflow = 0;
    let result = [];
    while (i < a.length || j < b.length) {
        let m = i < a.length ? parseInt(a[a.length - (i++) - 1], 2) : 0;
        let n = j < b.length ? parseInt(b[b.length - (j++) - 1], 2) : 0;
        let sum = m + n + overflow;
        result.push((sum % 2).toString(2));
        overflow = Math.floor(sum / 2);
    }
    if (overflow > 0) {
        result.push(overflow.toString(2));
    }
    return result.reverse().join('');
};

