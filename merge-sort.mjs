/* 
MERGE SORT:
- what do i know?
  in repeat:
    - it splits the list in half in recursion
    - compares left list and right list in repeat:
      - if the item in the left list is higher than the item in the right list:
        - add the item on a new list
        - remove the item from the list
*/


// TAKE: 1
function mergeSort(list) {
  if (list.length <= 1) return;

  const midPoint = Math.floor(list.length / 2)
  const left = list.slice(0, midPoint)
  const right = list.slice(midPoint, list.length)

  mergeSort(left)
  mergeSort(right)
  merge(left, right, list)

  return list
}

function merge(left, right, originalList) {
  let i = 0; // Index for the left array
  let j = 0; // Index for the right array
  let k = 0; // Index for the merged array

  // Compare elements from the left and right arrays and merge them into the original list.
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      originalList[k] = left[i];
      i++;
    } else {
      originalList[k] = right[j];
      j++;
    }
    k++;
  }

  // If there are remaining elements in the left array, append them to the merged array.
  while (i < left.length) {
    originalList[k] = left[i];
    i++;
    k++;
  }

  // If there are remaining elements in the right array, append them to the merged array.
  while (j < right.length) {
    originalList[k] = right[j];
    j++;
    k++;
  }

  return originalList;
}

console.log(mergeSort([1, 5, 4, 3, 2]))
// console.log(mergeSort([8, 7, 9, 10, 6, 5, 4, 3, 2, 1]))
