const test = require("node:test");
const assert = require("node:assert/strict");
const server = require("./index.js");
const http = require("http");

test("Response JSON test", async (t) => {
    await new Promise((resolve) => server.listen(0, resolve));
    console.log(server.address());
    const { port } = server.address();
    const res = await fetch(`http://localhost:${port}`);
    const body = await res.text();
    assert.strictEqual(
        JSON.parse(body).message,
        "Hello There!",
        "Response should have a variable `message` with value `Hello There!`"
    );
    await new Promise((resolve) => server.close(resolve));
});
