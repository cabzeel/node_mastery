const os = require('os');

const totalMemory = (os.totalmem() / (1000 ** 3)).toFixed(2);
const freeMemory = (os.freemem()/ (1000 ** 3)).toFixed(2);
const usedMem = totalMemory - freeMemory;
console.log(totalMemory, 'GB');
console.log(freeMemory,'GB');
console.log(usedMem.toFixed(2), 'GB');
console.log(os.loadavg())

/**
 * os.platform:useful for cross platform scrypting
 * os.arch(): shows a string representing the architecture that the nodejs executable was built for. It matters when software needs to choose or run architecture-specific code. For example, a package may include a native add-on compiled for x64 or arm64; the wrong one may fail to load or run.
 * os.type():Returns the operating system name as returned by uname(3). For example, it returns 'Linux' on Linux, 'Darwin' on macOS, and 'Windows_NT' on Windows.
 * os.type() vs os.platform(): Both identify the operating system, but they return different kinds of names:

*os.type() returns the OS name as reported by the system, such as "Linux", "Darwin", or "Windows_NT".
*os.platform() returns Node’s platform identifier, such as "linux", "darwin", or "win32".
*Use os.platform() when writing platform checks in Node.js; it matches process.platform. Use os.type() when you want the system’s OS name.

*release() shows the system's OS kernel version, the core part of the operating system that manages system resources and communication between hardware and software components. This method can be useful for tracking compatibility between OS kernel versions and server requirements.
version() returns the specific operating system version with more details than the release() method
cpus() returns an array of objects with details about each logical CPU core. This can help monitor CPU load.
The array will be empty if no CPU information is available, such as if the /proc file system is unavailable.
os.uptime(): shows the time syince the system was booted up..can show how long the server has been running
totalmem() and freemem() show the total amount of system memory in bytes and free system memory in bytes, respectively:
userInfo() returns an object containing information about the current system user
networkInterfaces() returns an object containing only network interfaces that have been assigned a network address
 */
console.log(os.platform());
console.log(os.arch());
console.log(os.type());
console.log(os.release());
console.log(os.version());
console.log(os.cpus());
console.log("uptime: ", (os.uptime() / 60 ** 2).toFixed(2), 'hours')
console.log(os.userInfo())
console.log(os.networkInterfaces());


