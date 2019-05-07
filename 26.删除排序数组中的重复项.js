/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let ind = 0;
    let num = null;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== num) {
            num = nums[i];
            nums[ind] = num;
            ind++;
        }
    }
    return ind;
};

