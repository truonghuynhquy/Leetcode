/**
 * @param {number} x
 * @return {boolean}
 */
// var isPalindrome = function (x) {
//     var array = x.toString().split("").map(Number);
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] !== array[array.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// };

var isPalindrome = function (x) {
    x = x.toString();
    let result = true;
    let mid = x.length / 2 + 1;
    for (let index = 0; index < mid; index++) {
        left = x[index];
        right = x[x.length - index - 1];
        if (left != right) {
            result = false;
            return result;
        }
    }

    return result;
};

console.log(isPalindrome(10));
