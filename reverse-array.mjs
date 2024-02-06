// Given [5,4,2,1,3], return [3,1,2,4,5]

function reverseArray(list) {
  let newList = []

  for (let i = list.length - 1; i >= 0; i--) {
    newList.push(list.pop())
  }

  return newList
}

console.time("v1")
console.log(reverseArray([5, 4, 2, 1, 3]))
console.timeEnd("v1")

function reverseArrayV2(list) {
  for (let i = list.length - 1; i >= 0; i--) {
    let item = list.pop()

    list.splice(list.length - i, 0, item)
  }

  return list
}

console.time("v2")
console.log(reverseArrayV2([5, 4, 2, 1, 3]))
console.timeEnd("v2")
