var http = require('http');
var server = http.createServer();
var Promise = require('bluebird');
var Activity = require('./models/activity');
var Hotel = require('./models/hotel');
var Place = require('./models/place');
var Restaurant = require('./models/restaurant');

server.on('request', require('./app'));

Promise.all([
        Hotel.sync({}),
        Restaurant.sync({}),
        Activity.sync({}),
        Place.sync({})
    ])
    .then(function () {
        server.listen(3000, function () {
            console.log('Server is listening on port 3000!');
        });
    })
    .catch(console.error);