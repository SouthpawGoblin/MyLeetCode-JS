/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let neg = x < 0;
    let strx = Math.abs(x).toString();
    strx = strx.split('').reverse().join('');
    let zeroInd = 0;
    for (let i = 0; i < strx.length; i++) {
        if (strx[i] !== '0') {
            zeroInd = i;
            break;
        }
    }
    let res = parseInt(strx.slice(zeroInd));
    res = neg ? -res : res;
    const two31 = Math.pow(2, 31);
    if (res < -two31 || res > two31 - 1) {
        res = 0;
    }
    return res;
};

