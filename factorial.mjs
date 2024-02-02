function compute(n, memo = {}) {
  if (n <= 1) return memo

  memo[n] = n * n - 1

  return compute(n - 1, memo)
}

function factorial(list) {
  const max = Math.max(...list)

  return compute(max, list)
}

console.time("factorial")
console.log(factorial([2, 3, 5]))
console.timeEnd("factorial")
