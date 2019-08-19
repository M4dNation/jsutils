const fs = require("fs");
const uglify = require("uglify-js");

console.log("Starting minification process...");

const paths = [
  "src/array/",
  "src/collection/",
  "src/env/",
  "src/function/",
  "src/number/",
  "src/object/",
  "src/string/",
  "src/utility/",
];

let files = [];

for (const path of paths) {
  const names = fs.readdirSync(path, "utf-8").map(name => {
    return path + name;
  });

  files.push(names);
}

files = [].concat(...files);
files.push("src/main.js");

for (let i = 0; i < files.length; i++) {
  const { code } = uglify.minify(fs.readFileSync(files[i], "utf8"));

  fs.writeFile(files[i], code, "utf-8", err => {
    if (err) {
      throw err;
    }

    console.log(`${files[i]} has been minified.`);
  });
}
