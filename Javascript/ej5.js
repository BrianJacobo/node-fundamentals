function insertionSort( arreglo ) {
    var tamano = arreglo.length,
        slot,
        tmp;
   
    for ( var i = 0; i < tamano; i++ ) { // 1er loop     
      tmp = arreglo[i];
      for ( slot = i - 1; slot >= 0 && arreglo[slot] > tmp; slot-- ){ // 2do loop
        arreglo[ slot + 1 ] = arreglo[slot];
      }
      arreglo[ slot + 1 ] = tmp;
    }
    return arreglo;
  };
  var miArreglo = [5,6,1,3,9];
console.log(`Arreglo inicial ==> ${miArreglo}`);
console.log( insertionSort( miArreglo ) ); // [ 1, 3, 5, 6, 9 ]