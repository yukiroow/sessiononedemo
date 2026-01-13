const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    if (pathname === "/goodbye") {
        const message = { message: "Bye bye!" };
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(message));
        return;
    }

    const message = { message: "Hello There!" };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(message));
});

if (!process.env.NODE_ENV) {
    const port = process.env.PORT || 7777;
    server.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

module.exports = server;
