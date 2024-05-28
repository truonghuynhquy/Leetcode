// /**
//  * @param {number} n
//  * @return {number}
//  */
// var pivotInteger = function (n) {
//     let sum1 = 0;
//     for (let i = 1; i <= n; i++) {
//         let sum2 = 0;
//         sum1 += i;
//         for (let j = i; j <= n; j++) {
//             sum2 += j;
//         }
//         if (sum1 === sum2) {
//             return i;
//         }
//     }
//     return -1;
// };

var pivotInteger = function (n) {
    let total = (n * (n + 1)) / 2;
    let sum_i = 0;

    for (let i = 1; i <= n; i++) {
        if (sum_i === total - sum_i - i) {
            return i;
        }
        sum_i += i;
    }

    return -1;
};

// var pivotInteger = function(n) {
//     if(n==1) return 1

//     let lSum = 1
//     let rSum = n
//     let i=1
//     let j=n

//     while(i != j) {
//         if(lSum < rSum) {
//             i++
//             lSum += i
//         } else {
//             j--
//             rSum += j
//         }
//     }

//     lSum += i
//     rSum += j

//     return lSum == rSum ? i : -1
// };
console.log(pivotInteger(8)); // 2
