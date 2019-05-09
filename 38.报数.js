/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 报数
 */
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let str = '1';
    for (let i = 2; i <= n; i++) {
        let temp = [];
        let cnt = 1;
        let char = null;
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== char) {
                if (char) {
                    temp.push(cnt.toString());
                    temp.push(char);
                }
                char = str[i];
                cnt = 1;
            } else {
                cnt++;
            }
        }
        temp.push(cnt.toString());
        temp.push(char);
        str = temp.join('');
    }
    return str;
};

