const fs = require('fs');
const path = require('path');

module.exports = function (dir, ext, callback) {
    if (ext[0] != '.') {
        ext = '.' + ext;
    };

    fs.readdir(dir, (err, files) => {
        if (err) {
            return callback(err);
        };

        files = files.filter(function(file) {
            return path.extname(file) === ext;
        });

        callback(null, files);
    });
}
