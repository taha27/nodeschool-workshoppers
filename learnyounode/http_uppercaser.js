const http = require('http');

var server = http.createServer((req, res) => {
    if (req.method !== 'POST') {
        return;
    }

    let body = '';

    req.on('error', (err) => {
        console.error(err);
    });

    req.on('data', (chunk) => {
        body += chunk;
    });

    req.on('end', () => {
        res.end(body.toString().toUpperCase());
    });

});

server.listen(process.argv[2]);
