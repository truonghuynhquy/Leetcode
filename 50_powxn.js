/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) return 1;
    if (n > 0) return pow(x, n);
    if (n < 0) return 1 / pow(x, -n);
};

var pow = function (x, n) {
    if (n === 1) return x;
    var num = pow(x, Math.floor(n / 2));
    if (n % 2 === 0) {
        return num * num;
    } else {
        return x * num * num;
    }
};

console.log(myPow(3.0, 10)); // Output: 1024.00000
