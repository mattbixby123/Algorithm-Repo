// JavaScript
function compareYears(years) {
  let count = 0;
  for (let i = 0; i < years.length - 1; i++) {
    const a = years[i];
    const b = years[i + 1];

    if (a > b) {
      count += 2;
    } else if (a < b) {
      count += 1;
    }
    // If a === b, we don't change the count
  }
  return count;
}