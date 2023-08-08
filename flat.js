const input = {
  a: {
    b: {
      c: 'xxx',
    },
    d: [{ m: 'mmm', n: 'nnn' }],
  },
  e: 'zzz',
};

const fn = (obj) => {
  const res = {};
  const figure = (o, prefix = '') => {
    for (const key in o) {
      const newKey = prefix ? `${prefix}.${key}` : `${key}`;
      if (o[key] instanceof Array) {
        o[key].forEach((val, i) => {
          figure(val, `${newKey}[${i}]`);
        });
      } else if (o[key] instanceof Object) {
        figure(o[key], newKey);
      } else {
        res[newKey] = o[key];
      }
    }
  }
  figure(obj, '');
  return res;
}
const r = fn(input);
console.log(r);
