/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 *
 * https://leetcode-cn.com/problems/same-tree/description/
 *
 * algorithms
 * Easy (52.68%)
 * Likes:    179
 * Dislikes: 0
 * Total Accepted:    23.3K
 * Total Submissions: 44.2K
 * Testcase Example:  '[1,2,3]\n[1,2,3]'
 *
 * 给定两个二叉树，编写一个函数来检验它们是否相同。
 * 
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 * 
 * 示例 1:
 * 
 * 输入:       1         1
 * ⁠         / \       / \
 * ⁠        2   3     2   3
 * 
 * ⁠       [1,2,3],   [1,2,3]
 * 
 * 输出: true
 * 
 * 示例 2:
 * 
 * 输入:      1          1
 * ⁠         /           \
 * ⁠        2             2
 * 
 * ⁠       [1,2],     [1,null,2]
 * 
 * 输出: false
 * 
 * 
 * 示例 3:
 * 
 * 输入:       1         1
 * ⁠         / \       / \
 * ⁠        2   1     1   2
 * 
 * ⁠       [1,2,1],   [1,1,2]
 * 
 * 输出: false
 * 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // 适用于任意深度二叉树的判断
    let qP = [p];
    let qQ = [q];
    while (qP.length && qQ.length) {
        let nP = qP.shift();
        let nQ = qQ.shift();
        if (!nP && !!nQ || !!nP && !nQ || !!nP && !!nQ && nP.val !== nQ.val) {
            return false;
        } else {
            if (nP) {
                qP.push(nP.left);
                qP.push(nP.right);
            }
            if (nQ) {
                qQ.push(nQ.left);
                qQ.push(nQ.right);
            }
        }
    }
    if (qP.length || qQ.length) {
        return false;
    } else {
        return true;
    }
};

