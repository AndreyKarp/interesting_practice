const curry = (fn, ...par) => {
  const curried = (...args) => (
    fn.length > args.length
      ? curry(fn.bind(null, ...args))
      : fn(...args)
  )
  return par.length ? curried(...par) : curried
}

const foo = (a, b) => {
  return a / b * 100
}
const f = curry(foo, 1)
const newF = f(2)


// console.log(f(1, 2))
console.log(newF)