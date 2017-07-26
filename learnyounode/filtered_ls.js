const fs = require('fs');
const path = require('path');

if (process.argv[3][0] != '.') {
    var extension = '.' + process.argv[3];
}

fs.readdir(process.argv[2], (err, files) => {
    if (err) {
        return console.error(err);
    }
    for (let file of files) {
        // if (file.includes(extension)) {
        if (path.extname(file) === extension) {
            console.log(file);
        }
    }
})
