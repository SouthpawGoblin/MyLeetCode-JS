/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += 1;
        if (digits[i] === 10) {
            digits[i] = 0;
        } else {
            break;
        }
    }
    if (digits[0] === 0) {
        digits.splice(0, 0, 1);
    }
    return digits
};

