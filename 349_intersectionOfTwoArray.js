/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function (nums1, nums2) {
//     let result = [];
//     nums1.sort((a, b) => a - b);
//     console.log(nums1);
//     for (let i = 0; i < nums2.length; i++) {
//         let left = 0;
//         let right = nums1.length - 1;
//         while (left <= right) {
//             let mid = Math.floor((left + right) / 2);
//             if (nums2[i] === nums1[mid]) {
//                 result.push(nums2[i]);
//                 break;
//             } else if (nums2[i] < nums1[mid]) {
//                 right = mid - 1;
//             } else left = mid + 1;
//         }
//     }
//     return [...new Set(result)];
// };

var intersection = function (nums1, nums2) {
    let result = [];
    for (let i = 0; i < nums2.length; i++) {
        if (nums1.includes(nums2[i])) {
            result.push(nums2[i]);
        }
    }
    return [...new Set(result)];
};

console.log(
    intersection(
        [
            61, 24, 20, 58, 95, 53, 17, 32, 45, 85, 70, 20, 83, 62, 35, 89, 5,
            95, 12, 86, 58, 77, 30, 64, 46, 13, 5, 92, 67, 40, 20, 38, 31, 18,
            89, 85, 7, 30, 67, 34, 62, 35, 47, 98, 3, 41, 53, 26, 66, 40, 54,
            44, 57, 46, 70, 60, 4, 63, 82, 42, 65, 59, 17, 98, 29, 72, 1, 96,
            82, 66, 98, 6, 92, 31, 43, 81, 88, 60, 10, 55, 66, 82, 0, 79, 11,
            81,
        ],
        [
            5, 25, 4, 39, 57, 49, 93, 79, 7, 8, 49, 89, 2, 7, 73, 88, 45, 15,
            34, 92, 84, 38, 85, 34, 16, 6, 99, 0, 2, 36, 68, 52, 73, 50, 77, 44,
            61, 48,
        ]
    )
);
