const EventEmitter = require('events');

//Raising a noise
//emitter.emit('messageLogged');
// Adding an event argument...
//emitter.emit('messageLogged', { id: 1, url: 'http://' });

const Logger = require('./logger');
const logger = new Logger();

//Register a listender
//emitter.on('messageLogged', function() {
    //Adding arg...
//emitter.on('messageLogged', function(arg) {
    //Using an arrow function (as in the ES6)...
    
logger.on('messageLogged', (arg) => {
  console.log('A Listener Is called', arg);
});

logger.log('message');