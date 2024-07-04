const fs = require("fs");

let content =
  "A stream is an abstract interface for working with streaming data in Node.js";

let ws = fs.createWriteStream("output.txt");
ws.write(content, "utf-8");

ws.end();
ws.on("finish", () => {
  console.log("Content written to the file!");
});
