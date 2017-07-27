const http = require('http');
const fs = require('fs');

var server = http.createServer((req, res) => {
    let fileStream = fs.createReadStream(process.argv[3]);

    fileStream.on('open', () => {
        fileStream.pipe(res);
    });

    fileStream.on('error', (err) => {
        res.end(err);
    });

});

server.listen(process.argv[2]);
