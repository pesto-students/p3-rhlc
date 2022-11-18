const spiralOrder = (matrix) => {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }
  let rowBegin = 0,
    rowEnd = matrix.length - 1,
    colBegin = 0,
    colEnd = matrix[0].length - 1;

  let result = [];
  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    for (let i = colBegin; i <= colEnd; i++) {
      result.push(matrix[rowBegin][i]);
    }
    rowBegin++;

    for (let i = rowBegin; i <= rowEnd; i++) {
      result.push(matrix[i][colEnd]);
    }
    colEnd--;

    if (rowBegin <= rowEnd) {
      for (let i = colEnd; i >= colBegin; i--) {
        result.push(matrix[rowEnd][i]);
      }
    }
    rowEnd--;

    if (colBegin <= colEnd) {
      for (let i = rowEnd; i >= rowBegin; i--) {
        result.push(matrix[i][colBegin]);
      }
    }
    colBegin++;
  }

  return result;
};

const matrixArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(spiralOrder(matrixArray));
