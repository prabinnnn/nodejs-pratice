const EventEmitter = require("node:events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("motor", () => {
  console.log("please trun off it");
});
setTimeout(() => {
  console.log("please trun off it");
}, 3000);
myEmitter.emit("event");
