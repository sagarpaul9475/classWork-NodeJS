const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const PORT = 3000;

const visitFile = path.join(__dirname, "visits.txt");
const logFile = path.join(__dirname, "logs.txt");

function logRequest(method, route) {
    const now = new Date();
    const timestamp =
        now.getFullYear() + "-" +
        String(now.getMonth() + 1).padStart(2, "0") + "-" +
        String(now.getDate()).padStart(2, "0") + " " +
        String(now.getHours()).padStart(2, "0") + ":" +
        String(now.getMinutes()).padStart(2, "0") + ":" +
        String(now.getSeconds()).padStart(2, "0");

    const log = `[${timestamp}] ${method} ${route}\n`;
    fs.appendFile(logFile, log, () => {});
}

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);
    const route = parsedUrl.pathname;

    // log every request
    logRequest(req.method, route);

    // 1. /visit
    if (route === "/visit") {

        fs.readFile(visitFile, "utf8", (err, data) => {

            let count = 0;

            if (!err) {
                count = parseInt(data) || 0;
            }

            count++;

            fs.writeFile(visitFile, count.toString(), () => {
                res.writeHead(200, {"Content-Type":"text/plain"});
                res.end(`Visit Count: ${count}`);
            });

        });
    }

    // 2. /count
    else if (route === "/count") {

        fs.readFile(visitFile, "utf8", (err, data) => {

            if (err) {
                res.writeHead(200, {"Content-Type":"text/plain"});
                res.end("No Visits Recorded");
                return;
            }

            res.writeHead(200, {"Content-Type":"text/plain"});
            res.end(`Total Visits: ${data}`);
        });
    }

    // 3. /reset
    else if (route === "/reset") {

        fs.writeFile(visitFile, "0", () => {
            res.writeHead(200, {"Content-Type":"text/plain"});
            res.end("Visit Counter Reset Successfully");
        });

    }

    // 4. 404
    else {
        res.writeHead(404, {"Content-Type":"text/plain"});
        res.end("404 Route Not Found");
    }

});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});