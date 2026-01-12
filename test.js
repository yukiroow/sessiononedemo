const test = require("node:test");
const assert = require("node:assert/strict");

test("Response JSON test", async (t) => {
    const res = await fetch("http://localhost:7777");
    const body = await res.text();
    assert.strictEqual(
        JSON.parse(body).message,
        "Hello There!",
        "Response should have a variable `message` with value `Hello There!`"
    );
});
