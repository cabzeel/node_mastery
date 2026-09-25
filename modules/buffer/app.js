const {Buffer} = require('buffer');
const {readFileSync} = require('fs');
/**
 * Buffer.alloc(): lets u create a buffer of a given size...every bite inside is automatically filled with 0...
 */

const myStrBuffer = Buffer.from('zeeltech😎');
console.log('😎'[1])

console.log(myStrBuffer);

const myNumBuffer = Buffer.from([
  70, 82, 69, 69, 67, 79, 68, 69, 67, 65, 77, 80,
]);

console.log(myNumBuffer);

const textDumpBuffer = readFileSync('../../assets/poem.txt');
console.log(textDumpBuffer);
console.log(myStrBuffer.toString());

const newBuffer = Buffer.alloc(12)

newBuffer.write('Hello world')
console.log(newBuffer.byteLength)