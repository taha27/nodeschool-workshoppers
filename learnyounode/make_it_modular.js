const filtered_ls = require('./filtered_ls_module');

filtered_ls(process.argv[2], process.argv[3], (err, list) => {
    if (err) {
        return console.error(err);
    };
    for (let file of list) {
        console.log(file);
    };
});

