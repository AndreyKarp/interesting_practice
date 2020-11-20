const chunkArray = chunkSize => array => {
  return array.reduce((acc, each, index, src) => {
    console.log('+',chunkSize)
    // console.log(chunkSize)
    if (!(index % chunkSize)) {
      console.log()
      return [ ...acc, src.slice(index, index + chunkSize) ]
    }
    return acc
  }, [])
}

const array = [ { a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }, { a: 6 }, { a: 7 }, { a: 8 } ]

const chunkArray3 = chunkArray(3)
// const chunkArray5 = chunkArray(5)

for (item of chunkArray3(array)) {
  console.log('++++__+_', item)
}


