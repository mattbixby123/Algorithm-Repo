/**
 * Initialize your data structure here.
 */
export const HitCounter = function () {
  this.hits = [];
};

/**
* Record a hit.
* @param timestamp - The current timestamp (in seconds granularity). 
* @param {number} timestamp
* @return {void}
*/
HitCounter.prototype.hit = function (timestamp) {
  this.hits.push(timestamp);
};

/**
* Return the number of hits in the past 5 minutes.
* @param timestamp - The current timestamp (in seconds granularity). 
* @param {number} timestamp
* @return {number}
*/
HitCounter.prototype.getHits = function (timestamp) {
  while (this.hits.length > 0 && timestamp - this.hits[0] >= 300) {
    this.hits.shift();
  }
  return this.hits.length;
};

/** 
* Your HitCounter object will be instantiated and called as such:
* var obj = new HitCounter()
* obj.hit(timestamp)
* var param_2 = obj.getHits(timestamp)
*/