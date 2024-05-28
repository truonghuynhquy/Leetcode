/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    if (nums.length === 0) return 0;
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === val) nums.splice(i, 1);
        else i++;
    }
    return nums.length;
};

// var removeElement = function (nums, val) {
//     let k = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== val) {
//             nums[k] = nums[i];
//             k++;
//         }
//     }

//     return k;
// };
// Test case
let nums1 = [3, 2, 2, 3];
let k1 = removeElement(nums1, 3);
console.log("Output: ", k1, nums1);
