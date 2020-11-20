const adapter = data => {
  const container = []
  let i = 0
  for (let key of data) {
    const container2 = {}
    for (let key2 in key) {
      for (let key3 in key[key2]) {
        container2[key2] = key[key2][key3]
      }
    }
    container[i] = container2
    i++
  }
  return container
}

