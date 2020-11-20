let arr = [1, 5, 9, -1, 678, 7, 7]
let res = []
let foo = [arr[0]]

for (let index = 1; index < arr.length; index++) {
  if (arr[index - 1] <= arr[index]) {
    foo.push(arr[index])
  } else {
    res.push(foo)
    foo = [arr[index]]
  }
}
res.push(foo)

console.log(res)

