const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const PORT = 3000;

// file path for notes
const filePath = path.join(__dirname, "notes.txt");

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);
    const route = parsedUrl.pathname;

    // Route 1: Add Note
    if (route === "/add") {

        const note = parsedUrl.query.note;

        if (!note) {
            res.writeHead(400, { "Content-Type": "text/plain" });
            res.end("400 Bad Request");
            return;
        }

        fs.appendFile(filePath, note + "\n", (err) => {
            if (err) {
                res.writeHead(500);
                res.end("Error writing note");
                return;
            }

            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Note Added Successfully");
        });
    }

    // Route 2: View Notes
    else if (route === "/notes") {

        fs.readFile(filePath, "utf8", (err, data) => {

            if (err || data.trim() === "") {
                res.writeHead(200, { "Content-Type": "text/plain" });
                res.end("No Notes Found");
                return;
            }

            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(data);
        });
    }

    // Route 3: Clear Notes
    else if (route === "/clear") {

        fs.writeFile(filePath, "", (err) => {
            if (err) {
                res.writeHead(500);
                res.end("Error clearing notes");
                return;
            }

            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("All Notes Deleted");
        });
    }

    // 404 Route
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Route Not Found");
    }

});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});