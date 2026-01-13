const test = require("node:test");
const assert = require("node:assert/strict");
const app = require("./index.js");
const http = require("http");

let server;
let port;

test.before(() => {
    server = http.createServer(app);
    server.listen(0);
    port = server.address().port;
});

test("Response JSON test", async (t) => {
    const res = await fetch(`http://localhost:${port}`);
    const body = await res.text();
    assert.strictEqual(
        JSON.parse(body).message,
        "Hello There!",
        "Response should have a variable `message` with value `Hello There!`"
    );
});

test.after(() => {
    server.close();
});
