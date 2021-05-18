const eventsName = {}

const pubSub = {
    publish: (eventName, ...params) => {

       eventsName[eventName].forEach(callback => callback(...params));
           
    },

    subscribe: (event, callback) => {
        if(!eventsName[event]) eventsName[event] = [];

        eventsName[event].push(callback);
    }
}

module.exports = pubSub;