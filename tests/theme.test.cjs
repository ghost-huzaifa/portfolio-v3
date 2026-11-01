const { readFileSync } = require("node:fs");
const { test } = require("node:test");
const assert = require("node:assert/strict");
const { runInNewContext } = require("node:vm");

function loadTheme(savedTheme, storageBlocked = false) {
  const root = { dataset: {} };
  const meta = { content: "#fbfaf5" };
  const attributes = {};
  let ready = false;
  let onReady;
  let onClick;
  const writes = [];
  const button = {
    hidden: true,
    setAttribute: (key, value) => {
      attributes[key] = value;
    },
    addEventListener: (event, callback) => {
      onClick = callback;
    },
  };
  runInNewContext(readFileSync(`${__dirname}/../theme.js`, "utf8"), {
    document: {
      documentElement: root,
      querySelector: () => meta,
      getElementById: () => (ready ? button : null),
      addEventListener: (event, callback) => {
        onReady = callback;
      },
    },
    localStorage: {
      getItem: () => {
        if (storageBlocked) throw new Error("Blocked");
        return savedTheme;
      },
      setItem: (key, value) => {
        if (storageBlocked) throw new Error("Blocked");
        writes.push([key, value]);
      },
    },
  });
  return {
    root,
    meta,
    button,
    attributes,
    writes,
    ready: () => {
      ready = true;
      onReady?.();
    },
    click: () => onClick?.(),
  };
}

test("defaults to bright before the page content loads", () => {
  const page = loadTheme(null);
  assert.equal(page.root.dataset.theme, "light");
  assert.equal(page.button.hidden, true);
  page.ready();
  assert.equal(page.button.hidden, false);
  assert.equal(page.attributes["aria-pressed"], "false");
});

test("restores a saved dark theme before the page content loads", () => {
  const page = loadTheme("dark");
  assert.equal(page.root.dataset.theme, "dark");
  assert.equal(page.meta.content, "#1a1a1a");
  page.ready();
  assert.equal(page.attributes["aria-pressed"], "true");
});

test("switches both ways, updates accessibility state, and saves the choice", () => {
  const page = loadTheme(null);
  page.ready();
  page.click();
  assert.equal(page.root.dataset.theme, "dark");
  assert.equal(page.attributes["aria-pressed"], "true");
  page.click();
  assert.equal(page.root.dataset.theme, "light");
  assert.equal(page.meta.content, "#fbfaf5");
  assert.equal(page.attributes["aria-pressed"], "false");
  assert.deepEqual(page.writes, [
    ["portfolio-theme", "dark"],
    ["portfolio-theme", "light"],
  ]);
});

test("ignores invalid saved themes", () => {
  const page = loadTheme("invalid");
  assert.equal(page.root.dataset.theme, "light");
});

test("remains usable when browser storage is blocked", () => {
  const page = loadTheme(null, true);
  assert.equal(page.root.dataset.theme, "light");
  page.ready();
  assert.doesNotThrow(page.click);
  assert.equal(page.root.dataset.theme, "dark");
});
