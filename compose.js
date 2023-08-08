let middleware = [];
middleware.push((next) => {
  console.log(1);
  next()
  console.log(1.1)
});
middleware.push((next) => {
  console.log(2);
  next();
  console.log(2.1);
});
middleware.push((next) => {
  console.log(3);
  next();
  console.log(3.1);
});
// /*// 1// 2// 3// 3.1// 2.1// 1.1

// const add = (n) => n + 10;
// const multi = (n) => n * 10;

// const compose = (callbacks) => {
//   // return function() {
//     return callbacks.reduce((prev, cur) => {
//       return () => prev(cur);
//     });
//   // }
// }

const compose = (callbacks) => {
  const dispatch = (i) => {
    if (i === callbacks.length) {
      return;
    }
    const fn = callbacks[i];
    fn(() => dispatch(i + 1));
  }
  return function() { dispatch(0) };
}

let fn = compose(middleware);
fn();
