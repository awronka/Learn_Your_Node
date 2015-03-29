var fs = require('fs');

file = fs.readFileSync(process.argv[2]);

lines = file.toString();

console.log(lines.split('\n').length-1);