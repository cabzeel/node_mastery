const fs = require('fs');
const fsPromises = require('fs/promises');
//fs methods both synchronous and asynchronous
/**
 * fs.writeFile();
 * fs.writeFilesync();
 * fs.readFile();
 * fs.readFileSync();
 * fs.open();
 * fs.openSync();
 * fs.openDir();
 * fs.openDirSync();
 * fs.openAsBlob();
 * fs.appendFile(): add content to file, if file does not exist, create a new one...appends text at the bottom.
 * fs.unlink() lets u delete a file
 */
/**
 * syntax for using async fs methods..
 * fs.Method('filePath', {encoding : 'utf8', callback})...callback can be a functioon call as wellas a function definition
 * callback takes in 2 parameters...error and data
 */


fs.readFile('assets/poem.txt',{encoding: 'utf8'}, callback);

function callback(_, data){
    // console.log(data)
}

//writefile syntax
const poem2Data = `Let the world burn\n
    Lost in a fog\n
    I fear that there's still further to fall\n
    It's dangerous cuz I want it all\n
    And I don't think I care what it costs....\n
    I shouldn't have fallen in love \n
    Look what u made me become \n
    I let u get too close \n
    Just to wake up alone \n
    I know u think u can run, scared to believe I am the one...\n
    I just can't let u gooo...\n
    I let the world burrn....
` ;
// fs.writeFile('assets/burn.txt', poem2Data, "utf8", (err) => {
//     if(err) {
//         console.log(err)
//     } 
//     console.log("Success: file has been written")
// })
//using promises...
async function letTheWorldBurn() {
    try {
        await fsPromises.writeFile('assets/burn.txt', poem2Data);
        console.log('================== file written successfully =================');
    } catch (error) {
        console.log(error)
    }
}

letTheWorldBurn();
console.log('hello node');

//trying with a heavy file and the sync way
async function run() {
    try {
        const data = await fsPromises.readFile('assets/dump.txt', 'utf8');
        console.log('========== readFile success ==========');
        console.log('Before writefileSync');

        const start = Date.now();
        fs.writeFileSync('assets/textDump.txt', data);
        //write file synchronously..

        console.log(`After writeFileSync (${Date.now() - start})ms`)
    } catch (err) {
        console.log(err);
    }
}



console.log('after blocking code');

async function appendToFile() {
    try {
        await fsPromises.appendFile(
            'assets/dump.txt',
            '\ntesting.....'
        )
        console.log('text has been appended')
    } catch (error) {
        console.error(`error appending to file: ${error}`)
    }
}


async function deleteFile(){
    try {
        await fsPromises.unlink('assets/textDump.txt');
        console.log('======= file deleted successfully =========')
        
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

deleteFile();

async function deleteFolder() {
    try {
        await fsPromises.rmdir('assets/burn.txt');
        console.log('Directory deleted successfully')

    } catch (error) {
        console.error(`error: ${error}`)
    }
}

