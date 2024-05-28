// Link: https://willdevforfood.github.io/posts/median-of-two-sorted-arrays/?fbclid=IwZXh0bgNhZW0CMTAAAR3vgdUGGCKfRupVofToT5v3CTTd9fhyHCNLsHWbqPyM_-k9W_vJNfGc7Ls_aem_ARVqvyLdl4Kt2Q5BXrPN0vOldF7zAJdWPl5D8iuM0zDOjWZcThwMbvfwlTBIa7lIhYhaSODwrzInpFhLeovFUCxY
// https://youtu.be/LPFhl65R7ww?si=As_0O-AWY6E2xUsM
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // Get the array with the smallest number of elements to execute
    if (nums1.length > nums2.length)
        return findMedianSortedArrays(nums2, nums1);

    // Get length for convenience in calculation
    const n1 = nums1.length;
    const n2 = nums2.length;

    let start = 0;
    let end = n1;

    while (start <= end) {
        // Divide the array into 2 parts
        let partitionA = Math.floor((start + end) / 2);
        let partitionB = Math.floor((n1 + n2 + 1) / 2) - partitionA;

        // Proceed to validate some cases
        let maxLeftA =
            partitionA === 0 ? Number.MIN_SAFE_INTEGER : nums1[partitionA - 1];
        let minRightA =
            partitionA === n1 ? Number.MAX_SAFE_INTEGER : nums1[partitionA];
        let maxLeftB =
            partitionB === 0 ? Number.MIN_SAFE_INTEGER : nums2[partitionB - 1];
        let minRightB =
            partitionB === n2 ? Number.MAX_SAFE_INTEGER : nums2[partitionB];

        // 3 cases mentioned in the article
        if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
            // Check the parity of the total length to calculate median
            if ((n1 + n2) % 2 === 0) {
                return (
                    (Math.max(maxLeftA, maxLeftB) +
                        Math.min(minRightA, minRightB)) /
                    2.0
                );
            } else {
                return Math.max(maxLeftA, maxLeftB);
            }
        } else if (maxLeftA > minRightB) {
            //Lying too far to the right will narrow the distance to the left
            end = partitionA - 1;
        } else {
            // Lying too far to the left narrows the distance to the right
            start = partitionA + 1;
        }
    }
};
console.log(findMedianSortedArrays([1, 2], [3, 4]));
