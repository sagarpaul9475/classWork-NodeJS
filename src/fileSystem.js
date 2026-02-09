import fs from "fs";
export const readFile = () => {
    console.log("Started ");
    const fileContent = fs.readFileSync("./file.txt", "utf8");
    console.log(fileContent);
    fs.writeFileSync("./file.txt", "new written content");
    const newFileContent = fs.readFileSync("./file.txt", "utf8");
    console.log("new file content after write", newFileContent);
    fs.appendFileSync("./file.txt", "\nNew Line");
    const newAppendContent = fs.readFileSync("./file.txt", "utf8");
    console.log("New Appende content", newAppendContent);
    console.log("Ended ");
};
