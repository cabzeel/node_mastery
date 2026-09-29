const {Readable, Writable, Duplex, Transform} = require('stream');

//most at times, we use the fs methods for streams
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, "../../assets/dump.txt");

const readInputStream = fs.createReadStream(filePath);

readInputStream.on('data', (bit) => {
    // console.log(`Received ${bit.length} bytes of data`);
    // console.log("Received data:", bit);
})

//writable stream
const output = path.join(__dirname, "../../assets//output.txt");

const writeOutputFileStream = fs.createWriteStream(output);

readInputStream.pipe(writeOutputFileStream);

writeOutputFileStream.on("finish", () => {
  console.log("All data has been written to the file");
});

writeOutputFileStream.on("error", (err) => {
  console.error("Error writing to file:", err);
});