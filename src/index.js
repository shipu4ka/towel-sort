module.exports = function towelSort(matrix) {
    const result = [];
    if (matrix) {
        for (let i = 0; i < matrix.length; i++) {
            for (let n = 0; n < matrix[i].length; n++) {
                let parityCheck = i % 2 === 0 ? n : matrix[i].length - n - 1;
                result.push(matrix[i][parityCheck]);
            }
        }
    }
    return result;
};
