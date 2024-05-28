/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    s = s.trim().split(" ");
    // TODO:
    // s = s.replace(/^\s+|\s+$/gm,'');
    return s[s.length - 1].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
