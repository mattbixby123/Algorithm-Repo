/**
 * @param {number} capacity
 */
export const LRUCache = function (capacity) {
  this.capacity = capacity;
  this.dic = new Map();
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function (key) {
  if (!this.dic.has(key)) {
    return -1;
  }
  var value = this.dic.get(key);
  this.dic.delete(key);
  this.dic.set(key, value);
  return value;
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function (key, value) {
  if (this.dic.has(key)) {
    this.dic.delete(key);
  }
  this.dic.set(key, value);
  // Capacity overflow
  if (this.dic.size > this.capacity) {
    this.dic.delete(this.dic.keys().next().value);
  }
};

/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/

// Create a new LRUCache with capacity 2
const cache = new LRUCache(2);

// Put some key-value pairs
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));       // returns 1

cache.put(3, 3);    // evicts key 2
console.log(cache.get(2));       // returns -1 (not found)
console.log(cache.get(3));       // returns 3

cache.put(4, 4);    // evicts key 1
console.log(cache.get(1));       // returns -1 (not found)
console.log(cache.get(3));       // returns 3
console.log(cache.get(4));       // returns 4

// Demonstrate updating an existing key
cache.put(3, 30);   // updates the value for key 3
console.log(cache.get(3));       // returns 30

// Demonstrate LRU behavior
console.log(cache.get(3));       // returns 30 (and makes 3 the most recently used)
cache.put(5, 5);    // evicts key 4, not 3
console.log(cache.get(4));       // returns -1 (not found)
console.log(cache.get(5));       // returns 5