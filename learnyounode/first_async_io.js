const fs = require('fs')

fs.readFile(process.argv[2], (err, data) => {
    if (err) {
        return console.error(err);
    }
    let fileContents = data.toString();
    console.log(fileContents.split('\n').length - 1);
})
