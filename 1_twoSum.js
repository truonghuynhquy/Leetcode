/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// var twoSum = function (nums, target) {
//     var array = [];
//     for (var i = 0; i < nums.length; i++) {
//         var number = nums[i];
//         if (array[target - number] >= 0) {
//             return [array[target - number], i];
//         } else array[number] = i;
//     }
// };

var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        var number = nums[i];
        var index = nums.indexOf(target - number);
        if (index >= 0 && index !== i) {
            return [i, index];
        }
    }
};

// var twoSum = function (nums, target) {
//     var map = new Map();
//     for (var i = 0; i < nums.length; i++) {
//         var number = nums[i];
//         if (map.has(target - number)) {
//             return [map.get(target - number), i];
//         }
//         map.set(number, i);
//     }
// };

// var twoSum = function (nums, target) {
//     for (var i = 0; i < nums.length; i++) {
//         for (var j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// };

console.log(twoSum([2, 7, 11, 15], 9));
