const http = require('http');

function start() {
    function onRequest(request, response) {
        console.log('Request recieved.');
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Hello World');
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log('Server has started.');
}

exports.start = start;

// function onRequest(request, response) {
    // console.log('Request recieved.');
    // response.writeHead(200, {'content-type': 'text/plain'});
    // response.write('Hello World');
    // response.end();
// }
// 
// http.createServer(onRequest).listen(8888);
// 
// console.log('Server has started.');

// http.createServer(function(request, response) {
    // response.writeHead(200, {'content-type': 'text/plain'});
    // response.write('Hello World');
    // response.end();
// }).listen(8888);