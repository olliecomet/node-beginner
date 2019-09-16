const exec = require('child_process').exec;

function start() {
    console.log(`Request handler 'start' was called`);
    let content = 'empty';

    exec('ls -lah', function (error, stdout, stderr) {
        content = stdout;
    });

    return content;
}

function upload() {
    console.log(`Request handler 'upload' was called`);
    return 'Hello Upload';
}

exports.start = start;
exports.upload = upload;

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