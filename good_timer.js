const begin = process.hrtime.bigint()
const diff = end => (end - begin) / 1000000n

setTimeout(() => {
  const end = process.hrtime.bigint()
  console.log('10: ' + diff(end))
}, 10)
setTimeout(() => {
  const end = process.hrtime.bigint()
  console.log('20: ' + diff(end))
}, 20)
setTimeout(() => {
  const end = process.hrtime.bigint()
  console.log('30: ' + diff(end))
}, 30)
