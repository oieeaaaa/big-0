import { sampleSize } from './sampleSizes.mjs'

// bonus:
// x choosing the pivot via median-of-three technique
// x use the median formula for odd and even
// - do this without creating a new array
const quickSort = (n) => {
  if (n.length <= 1) {
    return n;
  }

  const pivot = n.splice(Math.floor(n.length / 2), 1)[0]

  const left = [];
  const right = [];

  for (let i = 0; i < n.length; i++) {
    const current = n[i];

    if (current <= pivot) {
      left.push(current)
    } else {
      right.push(current)
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.time("v1");
console.log(quickSort(sampleSize))
console.timeEnd("v1");

const quickSortV2 = (n) => {
  if (n.length <= 1) {
    return n;
  }

  let medianTerm = Math.floor(n.length % 2 !== 0 ? ((n.length + 1) / 2) : (n.length / 2))
  let median = (n[medianTerm - 1] + n[medianTerm]) / 2

  const pivot = Math.floor(median);

  const left = [];
  const match = [];
  const right = [];

  for (let i = 0; i < n.length; i++) {
    const current = n[i];

    if (current < pivot) {
      left.push(current)
    } else if (current > pivot) {
      right.push(current)
    } else {
      match.push(current)
    }
  }

  return [...quickSort(left), ...match, ...quickSort(right)];
}

console.time("v2");
console.log(quickSortV2(sampleSize))
console.timeEnd("v2");

const quickSortV3 = () => {

}
