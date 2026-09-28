const path = require('path');
//The Node.js path module lets you work with files and directory paths. It provides several useful methods for handling and transforming directories, including joining, normalizing, and resolving the directories across different platforms and operating systems.
//global variables: do not require the path module to work...__filename and __dirname
//__filename is the absolute path of the current file and __dirname is the absolute path of the directory containing the current file.

console.log(`__filename: ${__filename}`);
console.log(`__dirname: ${__dirname}`);

//The basename() method shows the last part of the file, that is, the filename
console.log(path.basename(__filename));
//passing in __dirname into the basename function returns the folder name of our current working directory
console.log(path.basename(__dirname))
//dirname() returns the asbsolute path of the current folder excluding the folder itself:
console.log(path.dirname(__dirname))
//returns the extension of the file
console.log(path.extname(__filename));
//The join() method takes all the path segments you pass in and joins them into one clean, normalized path. 

// This could be useful if you want to merge related files in different folders so you can work with them together:
const joinedPath = path.join('src', 'assets', 'file1.txt');
console.log(joinedPath);
//The resolve() method turns a sequence of path segments into an absolute path. It starts from your current working directory and results in a full path that points to the exact location on the device:
const testResolve = path.resolve('src', 'assets', 'file1.txt');
console.log(testResolve);

//The difference between join() and resolve() is that join() creates a relative path, while resolve() returns an absolute path.

//parse() takes a directory or file and returns an object that contains the breakdown of its parts, such as the system root, its directory, extension, and the filename
console.log(path.parse(__dirname));

//format(), on the other hand, builds a path from an object containing directory, name, and extension:
const formatObj = {
    dir : '/users/johndoe/docs',
    name: 'main',
    ext: '.js',
}
console.log(path.format(formatObj));
