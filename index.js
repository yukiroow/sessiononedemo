const http = require("http");

const server = http.createServer((req, res) => {
    const message = { message: "Hello There!!" };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(message));
});

server.listen(7777, () => {
    console.log("Server has started at port 7777");
});
