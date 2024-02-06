// Binary Search:
// Given a sorted array and a target value, return the index of the target value in the array. If the target value is not present in the array, return -1.

function binarySearch(list, target) {
  let first = 0
  let last = list.length - 1

  while (first <= last) {
    let midpoint = Math.floor((first + last) / 2)

    if (list[midpoint] < target) {
      first = midpoint + 1
    } else if (list[midpoint] > target) {
      last = midpoint - 1
    } else {
      return midpoint
    }
  }

  return -1
}

console.time("v1")
console.log(binarySearch([10, 20, 30, 40, 50], 40)) // 3
console.log(binarySearch([1, 2, 3, 4, 5, 10, 20, 30, 40, 50], 4)) // 3
console.log(binarySearch([-1, -2, -3, -4, -5, 0, 1, 2, 3, 4, 5, 10, 20, 30, 40, 50], 3)) // 8
console.timeEnd("v1")
