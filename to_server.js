/*
★★★☆☆
Есть три коллбэчные функции результаты которых должны быть переданы в ToServer только после того как все они отработали.
Можно использовать Callback, Async/Await, Promise
*/

function A(cb) {
  setTimeout(() => {
    cb('A executed');
  }, 500)
}

function B(cb) {
  setTimeout(() => {
    cb('B executed');
  }, 800)
}

function C(cb) {
  setTimeout(() => {
    cb('C executed');
  }, 1000)
}

function To_server(all_data) {
  console.log(all_data);
}

Promise.all([A, B, C].map(func => new Promise(resolve => func(res => resolve(res)))))
.then(results => To_server(results))
