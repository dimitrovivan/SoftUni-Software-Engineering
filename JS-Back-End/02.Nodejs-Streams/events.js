let events = require('events');

let eventEmitter = new events.EventEmitter();

eventEmitter.on('test', (data) => {
    console.log(data);
})

eventEmitter.emit('test', 'Something testing'); 