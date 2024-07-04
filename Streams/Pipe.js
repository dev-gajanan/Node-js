const fs = require("fs");

let rs = fs.createReadStream("input.txt");
let ws = fs.createWriteStream("output.txt");

rs.pipe(ws);
