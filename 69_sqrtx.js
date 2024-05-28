/**
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function (x) {
//     return Math.floor(Math.sqrt(x));
// };
var mySqrt = function (x) {
    if (x < 2) return x;
    let left = 0,
        right = x / 2;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (mid * mid <= x && x < (mid + 1) * (mid + 1)) {
            return mid;
        } else if (mid * mid > x) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
};
console.log(mySqrt(4)); // Output: 2
console.log(mySqrt(8)); // Output: 2
