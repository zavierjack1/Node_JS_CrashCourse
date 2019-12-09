const EventEmitter = require('events');

//Create Class
class MyEmitter extends EventEmitter{}

//Init Object
const myEmitter = new MyEmitter();

myEmitter.on('event', ()=> console.log('Event fired'))

myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');


const Logger = require('../logger');
const logger  = new Logger();
logger.on("message", (data) => console.log("Called Listener", data));
logger.log("hello world");