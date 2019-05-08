/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现strStr()
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === '') {
        return 0;
    }
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.length - i < needle.length) {
            break;
        }
        let same = true;
        for (let j = 0; j < needle.length; j++) {
            if (needle[j] !== haystack[i + j]) {
                same = false;
                break;
            }
        }
        if (same) {
            return i;
        }
    }
    return -1;
};

