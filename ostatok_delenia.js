const fizzBuzz = num => {
  for(let i = 1; i <= num; i++) {
    // Проверяем, кратно ли число 3 и 5
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz')
    } // Проверяем, кратно ли число 3
    else if(i % 3 === 0) {
      console.log('fizz')
    } // Проверяем, кратно ли число 5
    else if(i % 5 === 0) {
      console.log('buzz')
    } else {
      console.log(i)
    }
  }
}

fizzBuzz(15)