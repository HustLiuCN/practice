class Pagination {
  constructor(total) {
    this.total = total;
    this.render();
  }

  total = 0;
  current = 1;
  limit = 7;
  left = [];
  right = [];

  render() {
    const { total, current, limit, left, right } = this;

    let count = limit;
    let l = current;
    let r = current;
    while(count > 0 && (l > 1 || r < total)) {
      if (l - 1 > 0) {
        l --;
        count --;
        if (count === 0) {
          break;
        }
      }
      if (r < total) {
        r ++;
        count --;
      }
    }

    console.log(l, r);
  }

  setCurrent(n) {
    this.current = n;
    this.render();
  }
}

const p = new Pagination(9);
p.setCurrent(9);
