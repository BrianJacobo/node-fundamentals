// a la semana =>200 +(0.9*VB)
const pagoSemanal = 200
function ventas(vbruta){
    return `El salario es: $${pagoSemanal +(0.09*vbruta)}`
}

console.log(ventas(5000));
console.log(ventas(6000));
console.log(ventas(7000));