const net = require('net');

let date = new Date();

function padLeft(str) {
    if (str.toString().length == 2) {
        return str;
    } else {
        return ('0' + str);
    }
}
var server = net.createServer((socket) => {
    let dateTime = `${date.getFullYear()}-` +
        `${padLeft(date.getMonth() + 1)}-` +
        `${padLeft(date.getDate())} ` +
        `${padLeft(date.getHours())}:` +
        `${padLeft(date.getMinutes())}\n`;
    socket.end(dateTime);
});

server.listen(process.argv[2]);
