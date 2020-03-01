const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('ping', () => {
    console.log("Got a ping ! ");
    setTimeout(function () { myEmitter.emit("pong") }, 1000);
});
myEmitter.on('pong', () => {
    console.log('Got a pong!');
    setTimeout(function () { myEmitter.emit("ping") }, 1000);
});

myEmitter.emit("pong");
