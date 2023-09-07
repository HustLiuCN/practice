console.log('start');
async function async1() {
  await async2();
  console.log('async1');
}
async function async2() {
  console.log('async2');
}
async1();
setTimeout(() => {
  console.log('setTimeout');
}, 0);
new Promise(rs => {
  console.log('promise');
  rs();
}).then(() => { console.log('promise1'); })
  .then(() => { console.log('promise2'); })
console.log('end');

`
start
async2
promise
end
async1
promise1
promise2
setTimeout
`
