/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/

function twoSum(n, target) {
  let res = []

  for (let i = 0; i < n.length; i++) {
    let x = target - n[i]

    for (let j = 0; j < n.length; j++) {
      if (j === i) continue;

      if (x - n[j] === 0) {
        res.push(j)
      }

      if (res.length >= 2) return res
    }
  }
}

console.time("v1")
console.log(twoSum([2, 7, 11, 15], 9)) // [0, 1]
console.log(twoSum([3, 2, 4], 6)) // [1, 2]
console.log(twoSum([3, 3], 6)) // [0, 1]
console.timeEnd("v1")

function twoSumV2(n, target) {
  const hashMap = new Map();

  for (let i = 0; i < n.length; i++) {
    let item = n[i]
    let diff = target - item

    if (hashMap.get(diff) !== undefined) {
      return [hashMap.get(diff), i]
    } else {
      hashMap.set(item, i)
    }
  }

  return null
}

console.time("v2")
console.log(twoSumV2([2, 7, 11, 15], 9)) // [0, 1]
console.log(twoSumV2([3, 2, 4], 6)) // [1, 2]
console.log(twoSumV2([3, 3], 6)) // [0, 1]
console.timeEnd("v2")
