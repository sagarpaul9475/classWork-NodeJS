const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");

const PORT = 3000;

// log file path
const logFile = path.join(__dirname, "server.log");

const server = http.createServer((req, res) => {

    // get route path
    const parsedUrl = url.parse(req.url, true);
    const route = parsedUrl.pathname;

    // create log entry
    const logEntry = `${new Date().toISOString()} | ${req.method} | ${route}\n`;

    // append log
    fs.appendFile(logFile, logEntry, (err) => {
        if (err) console.error("Log error:", err);
    });

    // Routes
    if (route === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to Home Page");
    }

    else if (route === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("This is the About Page");
    }

    else if (route === "/contact") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("This is the Contact Page");
    }

    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Page Not Found");
    }

});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});