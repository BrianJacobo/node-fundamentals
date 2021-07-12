m1 = [
  [1, 2, 3],
  [4, 5, 6],
];
m2 = [
  [7, 8],
  [9, 10],
  [11, 12],
];

function multiplicarMatrices(m1, m2) {
    var nuevaMatriz = [];
    for (var i = 0; i < m1.length; i++) {
        nuevaMatriz[i] = [];
        for (var j = 0; j < m2[0].length; j++) {
            var suma = 0;
            for (var k = 0; k < m1[0].length; k++) {
                suma += m1[i][k] * m2[k][j];
            }
            nuevaMatriz[i][j] = suma;
        }
    }
    return nuevaMatriz;
}
console.log(multiplicarMatrices(m1, m2))
console.table(multiplicarMatrices(m1, m2))