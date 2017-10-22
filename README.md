# dom-reducer

[![CircleCI](https://circleci.com/gh/stormcrows/dom-reducer/tree/master.svg?style=svg)](https://circleci.com/gh/stormcrows/dom-reducer/tree/master)

Reduce designed for DOM crawling. 
It can be used for node info collection.
 
It can behave like Visitor pattern modifying nodes,
and if you only need that functionality use dom-visitor instead:

- https://www.npmjs.com/package/dom-visitor
- https://github.com/stormcrows/dom-visitor


DOMReduce takes 3 arguments:

- startingNode
    ex.: document.body,

- reducer, a function called on every node with accumulator, ex.:
    (accu, node) => accu + (node.tagName === "DIV" ? 1 : 0)

- initialValue
    can be anything but it's usually: 0, {}, [], ""



DOMReduce supports Browser, Node.js & AMD.

## USAGE

Refer to index.spec.js for Node.js fakeDOM example

In browser: inject DOMReduce code unto a website through devtools or script tag,
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
