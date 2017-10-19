const DOMReduce = require("./index");
const { html, body, div, span } = require("./fakedom");

describe("tagCount", () => {
  const tagCount = (tag, node) =>
    DOMReduce(node, (count, node) => count + (node.tagName === tag ? 1 : 0), 0);

  const DOM = html([
    body([div([span(), span()]), div([div([span()]), div()])])
  ]);

  it("should return count of all dom elements with provided tag name", () => {
    expect(tagCount("html", DOM)).toBe(1);
    expect(tagCount("body", DOM)).toBe(1);
    expect(tagCount("div", DOM)).toBe(4);
    expect(tagCount("span", DOM)).toBe(3);
  });

  it("should be resilient to incorrect values passed as nodes", () => {
    expect(tagCount("span", [])).toBe(0);
    expect(tagCount("span", {})).toBe(0);
    expect(tagCount("span", "abc")).toBe(0);
    expect(tagCount("span", 1)).toBe(0);
    expect(tagCount("span", null)).toBe(0);
    expect(tagCount("span", undefined)).toBe(0);
  });
});

describe("attributeCount", () => {
  it("should count provided attributes from the given node", () => {
    const attributeCount = (attr, node) =>
      DOMReduce(node, (count, node) => count + (node[attr] ? 1 : 0), 0);

    const DOM = html([
      body([
        div([], [["onclick", () => {}]]),
        div([div([], [["onclick", () => {}]]), []])
      ])
    ]);

    expect(attributeCount("onclick", DOM)).toBe(2);
  });
});
