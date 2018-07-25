const fs = require("fs");
const uglify = require("uglify-js");
const docco = require("docco");

console.log(docco);

console.log("Starting minification process...");

const paths = [
    "src/array/",
    "src/collection/",
    "src/env/",
    "src/function/",
    "src/number/",
    "src/object/",
    "src/string/",
    "src/utility/"
];

let files = [];

for (let path of paths)
{
    let names = fs.readdirSync(path, "utf-8").map(function(name)
    {
        return path + name;
    });;

    files.push(names);    
}

files = [].concat.apply([], files);
files.push("src/main.js");

for (let i = 0; i < files.length; i++)
{
    let content = fs.readFileSync(files[i], "utf8");

    content = uglify.minify(content);

    fs.writeFile(files[i], content.code, "utf-8", function(err)
    {
        if (err)
            throw err;

        console.log(`${files[i]} has been minified.`);
    });
}

