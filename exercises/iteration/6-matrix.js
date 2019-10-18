'use strict';
// Use nested for loop to find max value in 2d matrix
// For example max([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
// should return 9
const max = matrix => {
  let maxValue = 0;

  for (let i = 0; i < matrix.length; i++) {
    const array = matrix[i];

    for (let j = 0; j < array.length; j++) {
      const item = array[j];

      if (item > maxValue) {
        maxValue = item;
      }
    }
  }

  return maxValue;
};

module.exports = { max };
