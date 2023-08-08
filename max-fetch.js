const fetch = (url) => {
  return new Promise(rs => {
    const delay = Math.random() * 100;
    setTimeout(() => rs(url), delay);
  });
}

class App {
  constructor(urls, max) {
    this.urls = urls;
    this.max = max;

    // this.queue = [];
    this.running = 0;
    this.order = 0;
    this.result = [];
    this.run();

    setTimeout(() => console.log(this.result), 1100);
  }

  async run() {
    while(this.running < this.max && this.urls.length) {
      this.running ++;
      const url = this.urls.shift();

      const order = this.order ++;
      console.log('---fetch---', url);
      const r = await fetch(url);
      console.log(`---done: ${r}---`);

      this.result[order] = r;
      this.running --;
      this.run();
    }
  }
}

const app = new App([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
