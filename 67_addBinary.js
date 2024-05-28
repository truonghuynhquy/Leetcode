/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let carry = 0;
    let result = "";

    // Iterate through the binary strings from the end
    for (
        let i = a.length - 1, j = b.length - 1;
        i >= 0 || j >= 0 || carry > 0;
        i--, j--
    ) {
        const numA = i >= 0 ? parseInt(a[i]) : 0;
        const numB = j >= 0 ? parseInt(b[j]) : 0;

        const sum = numA + numB + carry;
        carry = Math.floor(sum / 2);
        result = (sum % 2) + result;
    }

    return result;
};

// Example usage:
console.log(addBinary("11", "1")); // Output: "100"
console.log(addBinary("1010", "1011")); // Output: "10101"

// var addBinary = function(a, b) {
//     let s1 = BigInt('0b' + a);
//     let s2 = BigInt('0b' + b);
//     return (s1+s2).toString(2)
// }
