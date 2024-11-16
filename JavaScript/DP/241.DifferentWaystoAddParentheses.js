/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
  // Base case: if the expression is a single number, return it
  if (!isNaN(expression)) {
    return [parseInt(expression)];
  }

  const results = [];

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    // If we find an operator, split the expression and recursively compute
    if (char === '+' || char === '-' || char === '*') {
      const left = diffWaysToCompute(expression.slice(0, i));
      const right = diffWaysToCompute(expression.slice(i + 1));

      // Combine results from left and right
      for (const l of left) {
        for (const r of right) {
          if (char === '+') results.push(l + r);
          else if (char === '-') results.push(l - r);
          else if (char === '*') results.push(l * r);
        }
      }
    }
  }

  return results;
};