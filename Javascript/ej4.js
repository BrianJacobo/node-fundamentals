function perfecto(n) {
  var suma = 0;
  for (let i = 1; i < n; i++) {//comprobar que es divisible por i
    if (n % i == 0) {
      suma += i;//acumulando en caso si fuera divisor
    }
  }
  if (suma == n) {
    console.log(`${n} SI es un número perfecto y sus dividores son:\n`);//si es perfecto

    for (let i = 1; i < n; i++) {
      if (n % i == 0) {
        console.log(i);
      }
    }
  } else {
    console.log(`${n} NO es un número perceto`);//no es perfecto
  }
}
perfecto(12);
