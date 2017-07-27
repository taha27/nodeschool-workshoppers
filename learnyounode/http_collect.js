const http = require('http');

http.get(process.argv[2], (res) => {
    const statusCode = res.statusCode;

    let error;
    if (statusCode !== 200) {
        res.resume();
        return console.error(`Request failed.\nStatus Code: ${statusCode}.`);
    }

    // change encoding so the data chunks are emitted as Strings
    res.setEncoding('utf8');

    let allData = '';
    res.on('data', (chunk) => {
        allData += chunk;
    });
    res.on('end', () => {
        console.log(allData.length);
        console.log(allData);
        return;
    });
    res.on('error', (e) => {
        console.error(e);
    });
}).on('error', (e) => {
    console.error(`Error message: ${e.message}`);
});
