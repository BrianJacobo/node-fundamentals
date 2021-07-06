function hola(nombre){
    return new Promise (function(resolve, reject){
        setTimeout(function(){
            console.log("hola ",nombre);
            resolve(nombre)
        },1000)
    }) 
}

function adios(nombre){
    return new Promise ((resolve, reject)=>{
        setTimeout(function(){
            console.log("Adios ",nombre);
            resolve()
        },1000)
    })
}

function hablar(nombre){
    return new Promise ( function(resolve, reject){
        setTimeout(function(){
            console.log("bla bla bla");
            resolve(nombre)
        },1000)
    })
}

console.log('Iniciando proceso...');
hola('Carlos')
.then(hablar)
.then(hablar)
.then(hablar)
.then(adios)
.then(nombre=>{
    console.log("proceso terminado");
})