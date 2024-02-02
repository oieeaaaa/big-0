/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
*/

function validAnagram(s, t) {
  if (s.length !== t.length) return false

  for (let i = 0; i < s.length; i++) {
    let letterS = s[i]

    for (let j = 0; j < t.length; j++) {
      let letterT = t[j]

      if (letterS === letterT) {
        t = t.replace(letterT, "")
        break
      }
    }
  }

  return t.length === 0
}

console.time("v1")
console.log(validAnagram("anagram", "nagaram"))
console.log(validAnagram("rat", "car"))
console.log(validAnagram("aacc", "ccac"))
console.timeEnd("v1")

function validAnagramV2(s, t) {
  if (s.length !== t.length) return false

  const tMap = new Map()

  for (let i = 0; i < t.length; i++) {
    let letter = t[i]
    let mapItem = tMap.get(letter)

    if (mapItem) {
      tMap.set(letter, mapItem + 1)
    } else {
      tMap.set(letter, 1)
    }
  }

  for (let j = 0; j < s.length; j++) {
    let letter = s[j]
    let mapItem = tMap.get(letter)

    if (mapItem === undefined) return false

    tMap.set(letter, mapItem - 1)

    let newItem = tMap.get(letter)

    if (newItem <= 0) tMap.delete(letter)
  }

  return tMap.size === 0
}

console.time("v2")
console.log(validAnagramV2("anagram", "nagaram"))
console.log(validAnagramV2("rat", "car"))
console.log(validAnagramV2("aacc", "ccac"))
console.timeEnd("v2")

function validAnagramV3(s, t) {
  if (s.length !== t.length) return false

  const sMap = new Map()
  const tMap = new Map()

  for (let i = 0; i < s.length; i++) {
    let letterS = s[i]
    let letterT = t[i]

    sMap.set(letterS, 1 + (sMap.get(letterS) || 0))
    tMap.set(letterT, 1 + (tMap.get(letterT) || 0))
  }

  for (const [key] of sMap) {
    if (sMap.get(key) !== tMap.get(key)) return false
  }

  return true
}

console.time("v3")
console.log(validAnagramV3("anagram", "nagaram"))
console.log(validAnagramV3("rat", "car"))
console.log(validAnagramV3("aacc", "ccac"))
console.timeEnd("v3")
