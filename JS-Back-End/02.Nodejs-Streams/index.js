const pubSub = require('./pubSub');

pubSub.subscribe('test', (data) => {
 console.log(data);
})

pubSub.subscribe('test', (data, data2) => {
    console.log(data + data2);
   })

pubSub.publish('test', 'Testing', 'Again');