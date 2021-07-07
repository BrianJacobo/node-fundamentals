//preocess viene dentro de los modulos globales

const { hasUncaughtExceptionCaptureCallback } = require("process");

process.on('beforeExit',()=>{
    console.log('el proceso va a terminar');
})

process.on('exit',()=>{
    console.log('Ale, el proceso se acabó');
})

//cuando hay errores que no se están capturando
process.on('uncaughtException',(err,origen)=>{
    console.error('se olvido capturar un error');
    console.error(err);
})
// funcionPruebaUncaughtException()