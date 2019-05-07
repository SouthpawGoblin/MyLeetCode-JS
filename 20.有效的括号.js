/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const checkBrackets = (left, right) => {
        switch (left) {
            case '(': return right === ')';break;
            case '[': return right === ']';break;
            case '{': return right === '}';break;
            default: return false;
        }
    }

    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (stack.length > 0 && checkBrackets(stack[stack.length - 1], s[i])) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0;
};

