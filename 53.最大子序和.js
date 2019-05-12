/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity;
    let sum = 0;
    for (let num of nums) {
        sum = sum < 0 ? num : sum + num;
        max = sum > max ? sum : max;
    }
    return max;
};

