const EventEmitter = require("node:events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("motor", () => {
  console.log("please trun off it");
});
myEmitter.emit("event");
