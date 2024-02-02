/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

function containsDuplicate(n) {
  for (let i = 0; i < n.length; i++) {
    for (let j = i + 1; j < n.length; j++) {
      if (n[i] === n[j]) return true
    }
  }

  return false
}

function containsDuplicateV2(n) {
  let sortedN = n.sort();

  for (let i = 0; i < sortedN.length; i++) {
    if (n[i] === n[i + 1]) return true
  }

  return false;
}

function containsDuplicateV3(n) {
  let map = new Map()

  for (let i = 0; i < n.length; i++) {
    let item = n[i]

    if (!map.has(item)) {
      map.set(item)
    } else {
      return true
    }
  }

  return false
}

function containsDuplicateV4(n) {
  let set = new Set()
  let sizeBefore = 0

  for (let i = 0; i < n.length; i++) {
    sizeBefore = set.size
    set.add(n[i])

    if (set.size === sizeBefore) return true
  }

  return false
}

console.time("v1")
console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
console.timeEnd("v1")


console.time("v2")
console.log(containsDuplicateV2([1, 2, 3, 1]))
console.log(containsDuplicateV2([1, 2, 3, 4]))
console.log(containsDuplicateV2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
console.timeEnd("v2")

console.time("v3")
console.log(containsDuplicateV3([1, 2, 3, 1]))
console.log(containsDuplicateV3([1, 2, 3, 4]))
console.log(containsDuplicateV3([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
console.timeEnd("v3")

console.time("v4")
console.log(containsDuplicateV4([1, 2, 3, 1]))
console.log(containsDuplicateV4([1, 2, 3, 4]))
console.log(containsDuplicateV4([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
console.timeEnd("v4")
