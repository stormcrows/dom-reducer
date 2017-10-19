(function(name, definition) {
  if (typeof define === "function") {
    // AMD
    define(definition);
  } else if (typeof module !== "undefined" && module.exports) {
    // Node.js
    module.exports = definition();
  } else {
    // Browser
    var theModule = definition(),
      global = this,
      old = global[name];

    theModule.noConflict = function() {
      global[name] = old;
      return theModule;
    };
    global[name] = theModule;
  }
})("DOMReduce", function() {
  return function DOMReduce(node, reducer, initialValue) {
    return [].reduce.call(
      node && Object(node).childNodes ? node.childNodes : [],
      function(acc, node) {
        return DOMReduce(node, reducer, acc);
      },
      node ? reducer(initialValue, node) : initialValue
    );
  };
});
