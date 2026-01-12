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

server.listen(7777, () => {
    console.log("Server has started at port 7777");
});

module.exports = server;
