///file systema se ejecutará de forma asincrona
const fs = require ('fs')

function read(ruta,print){
    fs.readFile(ruta,(err,data)=>{
        print(data.toString());
    })
}
function write(ruta,contenido){
    fs.writeFile(ruta,contenido,(err)=>{
        if (err) {
            console.log('no he podido escribirlo',err);
        } else {
            console.log('se ha escrito correctamente');
        }
    })
}
function clear(ruta,cb){
    fs.unlink(ruta,cb)
}
read(__dirname+"/file.txt",console.log)
write(__dirname+"/file1.txt","this  is a 'writeFile' test")
clear(__dirname+"/file1.txt",console.log)