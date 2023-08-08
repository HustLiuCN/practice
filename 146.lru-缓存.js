/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.limit = capacity;
  this.dict = {};
  this.cache = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.dict.hasOwnProperty(key)) {
    this.setCache(key);
    return this.dict[key];
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  this.setCache(key);
  const exist = this.dict.hasOwnProperty(key);
  if (!exist && Object.keys(this.dict).length === this.limit) {
    const oldest = this.cache.shift();
    delete this.dict[oldest];
  }
  this.dict[key] = value;
};

LRUCache.prototype.setCache = function(key) {
  const i = this.cache.indexOf(key);
  if (i > -1) {
    this.cache.splice(i, 1);
  }
  this.cache.push(key);
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

