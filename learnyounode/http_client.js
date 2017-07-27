const http = require('http');

http.get(process.argv[2], (res) => {
    const statusCode = res.statusCode;

    let error;
    if (statusCode !== 200) {
        res.resume();
        return console.error(`Request failed.\nStatus Code: ${statusCode}.`);
    }

    // change encoding so the data chunks emitted as Strings
    res.setEncoding('utf8');

    // print each data chunk on a single line
    res.on('data', (chunk) => {
        console.log(chunk);
    });
    res.on('end', () => {
        return;
    });
    res.on('error', (e) => {
        console.error(e);
    });
}).on('error', (e) => {
    console.error(`Error message: ${e.message}`);
});
