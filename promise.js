const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

/**
 *    fn: (resolve: function, reject: function) => void;
 **/
class MyPromise {
  constructor(fn) {
    console.log('---创建 promise---');

    // 执行
    try {
      fn(this.resolve, this.reject);
    } catch(e) {
      this.reject(e);
    }

  }
  // 基本属性
  status = PENDING;
  value = null;
  reason = null;

  // reslove
  resolveCallback = [];
  resolve = (value) => {
    console.log('---resolve---', this.status, 'value:', value);
    if (this.status === PENDING) {
      this.status = FULFILLED;
      this.value = value;
      this.resolveCallback.forEach(cb => cb(this.value));
    }
  }

  // reject
  rejectCallback = [];
  reject = (reason) => {
    console.log('---reject---', this.status);
    if (this.status === PENDING) {
      this.status = REJECTED;
      this.reason = reason;
      this.rejectCallback.forEach(cb => cb(this.reason));
    }
  }

  // then
  then = (onFulfilled, onReject) => {
    console.log('---调用 then---', this.status);
    if (this.status === FULFILLED) {
      onFulfilled(this.value);
    }

    if (this.status === REJECTED) {
      onReject(this.reason);
    }

    if (this.status === PENDING) {
      this.resolveCallback.push(onFulfilled);
      this.rejectCallback.push(onReject);
    }
  }
}

// 创建
// const p1 = new MyPromise((rs, rj) => {
//   setTimeout(() => {
//     console.log('---异步 resolve: setTimeout 300---');
//     rs(1001);
//   }, [300]);
// });

// p1
// .then(d => {
//   console.log('---p1.then 1---', d);
//   return d;
// })
// .then(d => {
//   console.log('---p1.then 2---', d);
// })

// promise
const p = new Promise((rs, rj) => {
  console.log('---创建 promise---');
  setTimeout(() => {
    console.log('---resolve setTimeout---');
    rs(1001);
  }, [100]);
});

p.then(d => { console.log('---then 1---', d); return d + 1; })
  .then(d => { console.log('---then 11---', d); return new Promise(rs => setTimeout(() => rs(200), 0)) })
  .then(d => { console.log('---then 2---', d, '---return Promise.reject---'); return Promise.reject(2001); })
  .then(
    d => { console.log('---then 3---', d); return d + 1; },
    d => { console.log('---then 3 reject handler---', d); return d + 2; }
  )
  .then(d => { console.log('---then 4---', d); return d + 1; })
  .catch(d => { console.log('---catch---', d); return d + 1; })
  .finally(d => console.log('---finally---', d))
