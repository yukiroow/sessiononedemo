const test = require("node:test");
const assert = require("node:assert/strict");
const server = require("./index.js");

test.before(async () => {
    await new Promise((resolve) => server.listen(0, resolve));
});

test("Test root endpoint", async (t) => {
    const { port } = server.address();
    const res = await fetch(`http://localhost:${port}`);
    const body = await res.text();
    assert.strictEqual(
        JSON.parse(body).message,
        "Hello There! ",
        "Response should have a variable `message` with value `Hello There!`"
    );
});

test("Test /goodbye endpoint", async (t) => {
    const { port } = server.address();
    const res = await fetch(`http://localhost:${port}/goodbye`);
    const body = await res.text();
    assert.strictEqual(
        JSON.parse(body).message,
        "Bye bye!",
        "Response should have a variable `message` with value `Bye bye!`"
    );
});

test.after(async () => {
    await new Promise((resolve) => server.close(resolve));
});
