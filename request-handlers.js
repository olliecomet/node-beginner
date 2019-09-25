let querystring = require('querystring');

function start(response, postData) {
    console.log(`Request handler 'start' was called.`);

    let body = '<html' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" method="post">' +
        '<textarea name="text" rows="20" cols="60"></textarea>' +
        '<input type="submit" value="Submit text" />' +
        '</form>' +
        '</body>' +
        '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, postData) {
    console.log(`Request handler 'upload' was called`);
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write(`You've sent: ${querystring.parse(postData).text}`);
    response.end();
}

exports.start = start;
exports.upload = upload;

// function start(response) {
//     console.log(`Request handler 'start' was called`);

//     exec('find /',
//         { timeout: 10000, maxBuffer: 20000*1024 },
//         function(error, stdout, stderr) {
//             response.writeHead(200, {"Content-Type": "text/plain"});
//             response.write(stdout);
//             response.end();
//         });
// }

// function upload(response) {
//     console.log(`Request handler 'upload' was called`);
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write('Hello Upload');
//     response.end();
// }

// function start(response) {
//     console.log(`Request handler 'start' was called`);

//     exec('ls -lah', function (error, stdout, stderr) {
//         response.writeHead(200, {"Content-Type": "text/plain"});
//         response.write(stdout);
//         response.end();
//     });
// }

// function upload(response) {
//     console.log(`Request handler 'upload' was called`);
//     response.writeHead(200, {"Content-Type": "text/plain"});
//     response.write('Hello Upload');
//     response.end();
// }

// function start() {
//     console.log(`Request handler 'start' was called`);
//     let content = 'empty';

//     exec('ls -lah', function (error, stdout, stderr) {
//         content = stdout;
//     });

//     return content;
// }

// function upload() {
//     console.log(`Request handler 'upload' was called`);
//     return 'Hello Upload';
// }

// function start() {
//     console.log(`Request handler 'start' wasa called.`);

//     function sleep(milliseconds) {
//         let startTime = new Date().getTime();
//         while(new Date().getTime() < startTime + milliseconds);
//     }

//     sleep(10000);
//     return 'Hello Start';
// }

// function upload() {
//     console.log(`Request handler for 'upload' was called.`)
//     return 'Hello Upload';
// }

// function start() {
    // console.log(`Request handler 'start' was called.`);
    // return 'Hello Start';
// }
// 
// function upload() {
    // console.log(`Request handler 'upload' was called.`);
    // return 'Hello Upload';
// }




// function start() {
    // console.log(`Request handler 'start' was called.`);
// }
// 
// function upload() {
    // console.log(`Request handler 'upload' was called.`);
// }