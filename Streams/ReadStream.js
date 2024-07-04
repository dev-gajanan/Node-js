const fs = require("fs");

let content = "";
let rs = fs.createReadStream("input.txt");
rs.on("data", (chunk) => {
  content += chunk;
});

rs.on("end", () => {
  console.log(content);
});

rs.on("error", (err) => {
  console.log(err.stack);
});
