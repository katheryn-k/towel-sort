module.exports = function towelSort(matrix) {
    let matrixArray = [];
    if (matrix) {
        matrix.forEach((item, i) => {
            if (i % 2 === 0) {
                matrixArray.push(item);
            } else {
                item.sort((a, b) => b - a);
                matrixArray.push(item);
            }
        })
    }
    return matrixArray.flat();
}
