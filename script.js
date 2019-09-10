console.log("Hello World");

var console = require('better-console');

console.log("This is a log information");
console.warn("Warning!");
console.info("Information");
console.table([
    [1, 2],
    [3, 4]
]);
console.time("Timer");
console.timeEnd("Timer");