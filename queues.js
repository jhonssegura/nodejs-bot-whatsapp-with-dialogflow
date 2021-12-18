const {
    config:{ redis }
} = require('./config');
const {firstClient: firstClientWorker} = require('./workers');
const Queue = require('bull');

const firstClient = new Queue('firstClient', { redis, 
    limiter: {
        max: 1,
        duration: 10000
    },
});

// Workers
firstClient.process((job, done) => firstClientWorker(job, done));

// bar.add({ name: 'Jhon', age: 30 });

const queues = [
    {
        name: 'firstClient',
        hostId: 'FirstClient Queue Manager',
        redis,
    }
];

module.exports = {firstClient, queues};