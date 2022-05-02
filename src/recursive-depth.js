const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let arr2 = arr.map((item) => {
      if (Array.isArray(item)) {
        item = 1 + this.calculateDepth(item);
      } else {
        item = 1;
      }
      return item;
    });

    if (arr2.length === 0) {
      return 1;
    }

    return Math.max(...arr2);
  }
}

module.exports = {
  DepthCalculator,
};
