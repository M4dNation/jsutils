const fs = require("fs");

const paths = [
    "lib/array/",
    "lib/collection/",
    "lib/env/",
    "lib/function/",
    "lib/number/",
    "lib/object/",
    "lib/string/",
    "lib/utility/"
];

let files = [];

for (let path of paths)
{
    let names = fs.readdirSync(path).map(function(name)
    {
        return path + name;
    });;

    files.push(names);    
}

files = [].concat.apply([], files);

console.log(files);