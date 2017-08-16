const through = require('through2');
const split = require('split');
const stream = through(write, end);

let lineCount = 0;

function setLine (line) {
    if (lineCount % 2 == 0) {
        return line.toUpperCase() + '\n';
    } else {
        return line.toLowerCase() + '\n';
    }
}
function write (buf, _, next) {
    lineCount++;
    this.push(setLine(buf.toString()));
    next();
}

function end (done) {
    done();
}

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
