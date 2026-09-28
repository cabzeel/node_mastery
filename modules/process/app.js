const process = require('process')
// Gets all environment variables available to the current Node.js process
// console.log(process.env);

// Gets the current Node.js environment mode (like 'development' or 'production')
console.log(process.env.NODE_ENV); // development

// Gets the path of the shell program running the Node.js process
console.log(process.env.SHELL);
// Gets the system PATH variable where executables are searched for
console.log(process.env.PATH); 

// Gets the present working directory from where the process was started
console.log(process.env.PWD);

// Gets the username of the user running the current process
console.log(process.env.USER);

//process.argv lets you read command-line arguments:
console.log(process.argv);

//process.cwd() shows the current working directory
console.log(process.cwd())
//Process events are a core feature of Node.js that let your app respond to key moments in its lifecycle, like when it's about to exit, encounters an error, or receives a system signal. eg the exit event
process.on('exit', (code) => {
    console.log(`process exited with code ${code}`)
})
//The uncaughtException event is triggered when an error is not caught in your code, which can help you prevent crashes:
process.on('uncaughtException', (err) => {
    console.error("uncaught error: ", err.message)
})


// let num = 50;
// if(num > 5){
//     throw new Error('hehehe, testing testing testing');

// }

//the warning event is triggered when Node.js emits a process warning:
process.on('warning', (warning) => {
    console.warn('warning name: ', warning.name);
    console.warn('warning body: ', warning.message);
})

//trigger the warning with the process.emitWarning():
process.emitWarning('Hehehe, triggered my own warning', 'pretty cool super power')
