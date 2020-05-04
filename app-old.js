const http = require('http');

http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'Andrea',
            edad: 26,
            url: req.url
        };
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8081);

console.log('EScuchando el puerto 8080');