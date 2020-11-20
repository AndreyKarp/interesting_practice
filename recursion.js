/*
★★★★☆
Дана функция Get которая, условно, достает из базы данные с задержкой.
Написать функцию (Recursion) которая будет использовать оную рекурсией, чтобы можно было получать массив данных

Recursion([123, 321, 333, 111], res => console.log(res));
Результатом выполнения должно быть:
[ { id: 123 }, { id: 321 }, { id: 333 }, { id: 111 } ]
*/

function Get (id, cb) {
  setTimeout(() => {
    cb({ id: id })
  }, 1000)
}

function Recursion (requests, callback) {
  Promise.all(requests.map(item => new Promise((resolve) => {
    Get(item, response => resolve(response))
  })))
    .then(result => callback(result))
}

Recursion([123, 321, 333, 111], res => console.log(JSON.stringify(res)))

function Recursion2(arr, cb) {
  return Promise.all(arr.map((itm)=>{
    return new Promise((resolve)=>{
      Get(itm, resolve)
    })
  })).then((res)=>cb(res))
}

Recursion2([123, 321, 333, 111], res => console.log(res));

