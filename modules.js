// import fs from "fs";
// import path from "path";

// const filePath = path.join("file.txt");
// // const filePath = "file.txt";
// console.log("File path ", filePath);

// const absolutePath = path.resolve("jhsj");
// console.log("Absolute path ", absolutePath);

// const fileDir = path.dirname("src/file.js");
// console.log(fileDir);

// const extName = path.extname("file.js");
// console.log(extName);

// fs.readFile(filePath, "utf8", (err, content) => {
//     console.log(content);
// });

function Add(a, b) {
    return a + b;
}

function Multi(a, b) {
    return a * b;
}

module.exports = {
    Add,
    Multi
}