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

// Create a new HitCounter instance
const counter = new HitCounter();

// Record some hits
counter.hit(1);  // hit at timestamp 1
counter.hit(2);  // hit at timestamp 2
counter.hit(3);  // hit at timestamp 3

console.log(counter.getHits(4));  // Output: 3 (all hits are within 5 minutes)

counter.hit(300);  // hit at timestamp 300

console.log(counter.getHits(300));  // Output: 4 (all hits are within 5 minutes)

console.log(counter.getHits(301));  // Output: 3 (hit at timestamp 1 is no longer within 5 minutes)

// Add more hits
counter.hit(301);  // hit at timestamp 301

console.log(counter.getHits(302));  // Output: 3 (hits at 2, 3, 301)

console.log(counter.getHits(601));  // Output: 0 (no hits within the last 5 minutes)

console.log(counter.getHits(602));  // Output: 0 (no hits within the last 5 minutes)