var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;
    let count = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[count] != nums[i]) {
            count++;
            nums[count] = nums[i];
        }
    }
    return count + 1;
};

// Test cases
let nums1 = [1, 1, 2];
let k1 = removeDuplicates(nums1);
console.log("Output:", k1, "nums =", nums1); // Output: 2, nums = [1, 2, _]

let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k2 = removeDuplicates(nums2);
console.log("Output:", k2, "nums =", nums2); // Output: 5, nums = [0, 1, 2, 3, 4, _, _, _, _, _]
