import { sampleSize } from './sampleSizes.mjs';

const bubbleSort = (n) => {
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length - (i + 1); ++j) {
      let left = n[j]
      let right = n[j + 1]

      if (left > right) {
        n[j] = right
        n[j + 1] = left
      }
    }
  }

  return n;
}

console.time()
console.log(bubbleSort(sampleSize))
console.timeEnd()

// time: 10.107s
