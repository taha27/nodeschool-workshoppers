const filtered_ls = require('./filtered_ls_module');

function printData(err, data) {
    if (err) {
        return console.error(err);
    };
    for (let file of data) {
        console.log(file);
    }
};

filtered_ls(process.argv[2], process.argv[3], printData)

