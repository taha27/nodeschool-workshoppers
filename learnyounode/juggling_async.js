const http = require('http');

var urls = process.argv.length - 2;
var responseStreams = [];

for (let i = 2; i < process.argv.length; i++) {
    responseStreams[i - 2] = '';
    http.get(process.argv[i], (res) => {
        const statusCode = res.statusCode;

        let error;
        if (statusCode !== 200) {
            res.resume();
            return console.error(`Request failed.\nStatus Code: ${statusCode}.`);
        }

        // change encoding so the data chunks are emitted as Strings
        res.setEncoding('utf8');

        res.on('data', (chunk) => {
            responseStreams[i - 2] += chunk;
        });
        res.on('end', () => {
            urls -= 1;
            if (urls === 0) {
                for (let data of responseStreams) {
                    console.log(data);
                }
            }
            return;
        });
        res.on('error', (e) => {
            console.error(e);
        });
    }).on('error', (e) => {
        console.error(`Error message: ${e.message}`);
    });
}


