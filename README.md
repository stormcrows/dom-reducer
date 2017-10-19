# dom-reducer

Reduce designed for DOM crawling: it can be used for node info collection.
Or it can behave like Visitor pattern modifying nodes.

DOMReduce takes 3 arguments:
  - startingNode
      ex.: document.body,

  - reducer, a function called on every node with accumulator,
      ex.: (accu, node) => accu + (node.tagName === "DIV" ? 1 : 0)

  - initialValue
      can be anything but it's usually: 0, {}, [], ""

Supports Browser, Node.js & AMD.

## USAGE

Refer to index.spec.js for Node.js fakeDOM example

In browser: inject the code unto yours or any page through devtools or <script>,
then:

```javascript
const tagCount = (tag, node) =>
  DOMReduce(
    node, 
    (count, node) => count + (node.tagName === tag ? 1 : 0), 
    0
  );

tagCount("DIV", document.body);
```

Happy DOM crawling!
