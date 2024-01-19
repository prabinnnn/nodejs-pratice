const EventEmitter = require("node:events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("motor", () => {
  console.log("please trun off it");
});
setTimeout(() => {
  console.log("please trun off it");
}, 3000);
console.log("smxmscxdcxd");
myEmitter.emit("motor");
console.log("ndjscnsdncedsj");
