function hola(nombre, miCallback){
    setTimeout(function(){
        console.log("hola ",nombre);
        miCallback(nombre)
    },1000)
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log("Adios ",nombre);
        otroCallback()
    },1000)
}
console.log("iniciando proceso");
hola('Brian', function(nombre){
    adios(nombre,function(){
        console.log("terminando proceso");
    })
})

// hola('Brian', function(){})
// adios('Brian', function(){})