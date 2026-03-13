const http = require("http");
const fs = require("fs");
const os = require("os");
const path = require("path");

const PORT = 3000;

const visitorFile = path.join(__dirname, "visitors.log");
const backupFile = path.join(__dirname, "backup.log");

const server = http.createServer((req, res) => {

    // Route: /visit
    if (req.url === "/visit") {

        const entry = `Visitor visited at: ${new Date().toISOString()}\n`;

        fs.appendFile(visitorFile, entry, (err) => {
            if (err) {
                res.writeHead(500);
                res.end("Error writing log");
                return;
            }

            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Visitor logged successfully");
        });
    }

    // Route: /logs
    else if (req.url === "/logs") {

        fs.readFile(visitorFile, "utf8", (err, data) => {

            if (err) {
                res.writeHead(404);
                res.end("No logs found");
                return;
            }

            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(data);
        });
    }

    // Route: /copy-logs
    else if (req.url === "/copy-logs") {

        fs.copyFile(visitorFile, backupFile, (err) => {

            if (err) {
                res.writeHead(500);
                res.end("Error copying logs");
                return;
            }

            res.writeHead(200);
            res.end("Logs copied to backup.log");
        });
    }

    // Route: /clear-logs
    else if (req.url === "/clear-logs") {

        fs.unlink(visitorFile, (err) => {

            if (err) {
                res.writeHead(500);
                res.end("Error deleting log file");
                return;
            }

            res.writeHead(200);
            res.end("Visitor log file deleted");
        });
    }

    // Route: /system-info
    else if (req.url === "/system-info") {

        const cpus = os.cpus();

        const info = `
Hostname: ${os.hostname()}
OS Platform: ${os.platform()}
CPU Model: ${cpus[0].model}
Number of CPU Cores: ${cpus.length}
Total Memory: ${(os.totalmem()/1024/1024/1024).toFixed(2)} GB
Free Memory: ${(os.freemem()/1024/1024/1024).toFixed(2)} GB
System Uptime: ${(os.uptime()/60).toFixed(2)} minutes
`;

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(info);
    }

    else {
        res.writeHead(404);
        res.end("Route Not Found");
    }

});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});