// 2nd Question

/* const fs = require("fs");

const content = 'Node.js is a runtime environment that allows you to run JavaScript code on the server side. Its architecture is built around a single-threaded event loop, which enables asynchronous, non-blocking I/O operations. Some key components are Event loop, Libuv, V8 engine, Core Modules, npm.'

fs.writeFile('nodejs_architecture.txt', content, err =>{
    if(err){
        console.log("err : ", err);
    } else {
        console.log("File Written Successfully.");
    }
})
*/

// 3rd Question

/* const fs = require("fs");

fs.readFile('nodejs_architecture.txt', 'utf-8', (err, data) => {
    if(err){
        console.log("err : ", err);
    } 
        console.log(data);
}) 
*/

// 4th Question

/* const fs = require('fs');

const addContent = "The NodeJS is a single-threaded environment which means that it runs one action at a time and runs its operations smoothly with the use of events and event emitters. Events are actions that instruct the runtime what needs to be completed at a given time period with particular data."

fs.appendFile("nodejs_architecture.txt", addContent, (err) => {
    if(err){
        console.log("err : ", err);
    }
    else {
        console.log("Content added Successfully.");
    }
} )
*/

// 5 th Question

 /* const fs = require("fs");

fs.unlink("nodejs_architecture.txt", (err) => {
    if (err) {
        console.log("err : ", err);
    }
    console.log("File deleted successfully.");
}) */

// 6th Question

/* const os = require("os");

console.log("Operating system name : ", os.type());
console.log("OS release : ",os.release());
*/

// 7th Question

/* const http = require('http');

const hostname = '127.0.0.1';

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    
    res.end("I Am Happy To Learn Full Stack Web Development From PW Skills!")
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
}) */

// 8th question

/* const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('subscribe', () => {
    console.log("Thanks for subscribing to College Wallah");
});

   console.log(eventEmitter.emit('subscribe', 'College wallah'));

*/

// 9th Question

/* const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

function eventHandler() {
    console.log("Event handler called!");
}

eventEmitter.on('customEvent', eventHandler);

eventEmitter.emit('customEvent'); // Output: Event handler called!

// Remove the event handler
eventEmitter.off('customEvent', eventHandler);

eventEmitter.emit('customEvent'); // No output because the event handler is removed

*/

// 10th Question

const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const currentMaxListeners = eventEmitter.getMaxListeners();
console.log("The default maximun number of event listeners are :", currentMaxListeners);

eventEmitter.setMaxListeners(5);

const newMaxListeners = eventEmitter.getMaxListeners();
console.log("New maximum number of event listeners:", newMaxListeners);
