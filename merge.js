// you can use it any number of arrays
function Merge1 (...arrays) {
  return arrays.reduce((merged, array) => // itarate through input arrays
      merged.filter(value => !array.includes(
        value)) // exclude elements from the merged array that exist in the current array
        .concat([...new Set(array)] // remove dups from the current array
          .filter((value) => !merged.includes(value))) // and append only new unique elements
    , []) // the initial merged array
}

function Merge2 (arr1 = [], arr2 = []) {
  const filterArr = (array1 = [], array2 = []) => array1.filter(
    (itm) => array2.indexOf(itm) < 0)
  return [...new Set([].concat(filterArr(arr1, arr2), filterArr(arr2, arr1)))]
}

let array_one = [1, 2, 3, 5, 5]
let array_two = [1, 2, 5, 6, 6]
console.log(Merge1(array_one, array_two))

let array_one1 = [1, 2, 3, 5, 5]
let array_two1 = [1, 2, 5, 6, 6]
console.log(Merge2(array_one1, array_two1))
