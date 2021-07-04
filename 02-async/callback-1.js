function soyAsincrona(miCacllback){
    setTimeout(function(){
        console.log("estoy siendo asincrona");
        miCacllback()
    },1000)
}
console.log("iniciando proceso");
soyAsincrona(function(){
    console.log("terminando proceso");
})