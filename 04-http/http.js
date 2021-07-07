const http = require('http')

http.createServer(router2).listen(3000)

function router(req, res){
        console.log('nueva peticion');
        console.log(req.url);
        switch(req.url){
            case '/hola':
                res.write('hola, que tal')
                res.end()
                break;
            default:
                res.write('Error 404: no se lo que quieres')
                res.end()
        }
        res.writeHead(201,{'Content-Type':'text/plain'})
        res.write('hola, ya se usar http de node js')
        res.end()
}

function router2(req, res){
    console.log('nueva peticion');
    console.log(req.url);
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write('hola, ya se usar http de node js')
    res.end()
}
console.log('escuchando http en el puerto 3000');