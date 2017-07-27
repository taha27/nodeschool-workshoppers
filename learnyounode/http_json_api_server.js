const http = require('http');
const url = require('url');

var server = http.createServer((req, res) => {

    if (req.method !== 'GET') {
        return;
    }

    let parsedUrl = url.parse(req.url, true);
    let date = new Date(parsedUrl.query.iso);
    let resp_body;

    if (parsedUrl.pathname === '/api/parsetime') {
        resp_body = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }
    } else if (parsedUrl.pathname === '/api/unixtime') {
        resp_body = {
            unixtime: date.getTime()
        }
    } else {
        res.writeHead(404);
        return res.end();
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(resp_body));

});

server.listen(process.argv[2]);
