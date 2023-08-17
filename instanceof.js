/**
 *  手写 instanceof
 */

function isInstanceOf(obj, proto) {
  if (typeof proto !== 'function') {
    return false;
  }
  // typeof null -> object
  if (obj === null || (typeof obj !== 'function' && typeof obj !== 'object')) {
    return false;
  }

  let target = obj.__proto__;
  while(target) {
    if (target === proto.prototype) {
      return true;
    }
    target = target.__proto__;
  }
  return false;
}

function Person() {}
function Student() {}

Student.prototype = Object.create(Person.prototype);

var person = new Person();
var student = new Student();

console.log(isInstanceOf(person, Person)); // 输出: true
console.log(isInstanceOf(student, Person)); // 输出: true
console.log(isInstanceOf(student, Student)); // 输出: true
console.log(isInstanceOf(person, Student)); // 输出: false

var a = {}
var b = function(){}

console.log(isInstanceOf(a, Object));
console.log(isInstanceOf(a, Function));
