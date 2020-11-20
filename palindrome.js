function isPalindrome (str) {
  str = str.toUpperCase().replace(/\s/g, '')
  return str === str.split('').reverse().join('') //Разбиваем строку посимвольно  и превращаем ее в массив с помощью split(''),
                                                 //потом применяем к нему метод reverse()
                                                 // и собираем все символы в строку с помощью join('')
}

function isPalindrome1 (str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    } else {
      return true
    }
  }
}

console.log(isPalindrome('abcde dcba'))
// console.log(isPalindrome1('abcdedcba'))
// test = isPalindrome('abcdedcba');
// test2 = isPalindrome('abcded');

// console.log(test);
// console.log(test2);
// console.log('isPalindrome result: ' + 'str - ' + test + ' str2 - ' + test2);