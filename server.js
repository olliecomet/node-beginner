const http = require('http');
const url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
        console.log(`Request for ${pathname} recieved.`);

        route(handle, pathname);

        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Hello World');
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log('Server has started.');
}

exports.start = start;

// function start() {
    // function onRequest(request, response) {
        // let pathname = url.parse(request.url);
        // console.log(`Request for ${pathname} recieved.`);
        // response.writeHead(200, {'Content-Type': 'text/plain'});
        // response.write('Hello World');
        // response.end();
    // }
// 
    // http.createServer(onRequest).listen(8888);
    // console.log('Server has started.');
// }

// function start() {
    // function onRequest(request, response) {
        // console.log('Request recieved.');
        // response.writeHead(200, {'Content-Type': 'text/plain'});
        // response.write('Hello World');
        // response.end();
    // }
// 
    // http.createServer(onRequest).listen(8888);
    // console.log('Server has started.');
// }

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