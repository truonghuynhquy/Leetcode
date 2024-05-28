/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left = 0,
        right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return left;
};
// var searchInsert = function(nums, target) {
//     let left = 0;
//     let right = nums.length;

//     while(left < right) {
//         const mid = Math.floor((right - left)/2) + left;
//         if(target > nums[mid]) left = mid +1;
//         else right = mid;
//     }

//     return left;
// };
// var searchInsert = function (nums, target) {
//     let left = 0,
//         right = nums.length - 1,
//         idx1 = 0,
//         idx2 = 0;
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (nums[mid] === target) return mid;
//         else if (nums[mid] < target) {
//             left = mid + 1;
//             idx1 = mid;
//         } else {
//             right = mid - 1;
//             idx2 = mid;
//         }
//     }
//     if (left > nums.length - 1) return left;
//     else return Math.max(idx1, idx2);
// };

console.log(searchInsert([1, 4, 6, 7, 8, 10], 9)); // 2
