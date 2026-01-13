const http = require("http");

const server = http.createServer((req, res) => {
    const message = { message: "Hello There!" };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(message));
});

if (process.env.NODE_ENV !== "test") {
    const port = process.env.PORT || 7777;
    server.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

module.exports = server;
