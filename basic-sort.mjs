import { sampleSize } from './sampleSizes.mjs';

const basicSort = (n) => {
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      let left = n[j];
      let right = n[j + 1];

      if (left > right) {
        n[j] = right;
        n[j + 1] = left;
      }
    }
  }

  return n
}

console.time()
console.log(basicSort(sampleSize))
console.timeEnd()

// time: 19.097s
