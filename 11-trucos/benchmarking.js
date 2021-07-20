// Tiempo que demora en ejecutar un proceso
console.time('todo')
let suma = 0
console.time('bucle 1')
for (let i = 0; i < 100000; i++) {
    suma +=1    
}
console.timeEnd('bucle 1')

let suma2 = 0
console.time('bucle 2')
for (let j = 0; j < 100000; j++) {
    suma +=1    
}
console.timeEnd('bucle 2')

console.time('asincrono')
console.log('empieza el proceso asincrono');
asincrona()
    .then(()=>{
        console.timeEnd('asincrono');
    })
console.timeEnd('todo')

function asincrona(){
    return new Promise((resolve)=>{
        setTimeout(function(){
            console.log('Termina el prodeso asincrono');
            resolve()
        })
    })
}