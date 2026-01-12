const test = require("node:test");
const assert = require("node:assert/strict");

test("Test root endpoint", async (t) => {
    const res = await fetch("http://localhost:7777");
    const body = await res.text();
    assert.strictEqual(
        JSON.parse(body).message,
        "Hello There! ",
        "Response should have a variable `message` with value `Hello There!`"
    );
});

test("Test /goodbye endpoint", async (t) => {
    const res = await fetch("http://localhost:7777/goodbye");
    const body = await res.text();
    assert.strictEqual(
        JSON.parse(body).message,
        "Bye bye!",
        "Response should have a variable `message` with value `Bye bye!`"
    );
});
