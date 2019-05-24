/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode-cn.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (46.35%)
 * Likes:    346
 * Dislikes: 0
 * Total Accepted:    33.2K
 * Total Submissions: 71.5K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 * 
 * 
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 * 
 * 
 * 说明:
 * 
 * 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) {
        return true;
    }
    let qP = [root.left];
    let qQ = [root.right];
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
            if (nQ) {   // push顺序要反转来判断镜像
                qQ.push(nQ.right);
                qQ.push(nQ.left);
            }
        }
    }
    if (qP.length || qQ.length) {
        return false;
    } else {
        return true;
    }
};

