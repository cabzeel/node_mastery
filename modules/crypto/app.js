const crypto = require('crypto')
/**Createhash
 * createHash() method creates a hash obect by taking in algoritms like sha256, sha512, md5..
 * it is a one way operation so u cant reserve it;
 * useful for hashing passwords and encrypting files
 * to use, pass in algorithm, and update(feed in data) and finally digest(with encoding) to get the hash value
 */

const hashedPassword = crypto
    .createHash('sha256')
    .update('supersecretpassword')
    .digest('hex');

console.log(`hashedPassword: ${hashedPassword}`)
/**
 * createHmac() takes it further by taking in a secret key that can be used to decode the hashed password
 */ 

const hMacPassword = crypto
    .createHmac("sha512", "my_super_secret_keyucnneverguiess")
    .update("zeeltechpasswrods235")
    .digest("hex");

console.log("hMacPassword: ", hMacPassword);

/**createCipheriv() & createDeCipheriv()
 * use to encrypt and decrypt data
 * both take in an algorithm, a key and an iv
 * iv: a block of random or unique data used at the start of the encryption process
 * to decrypt data, the key must be the same or you'll either get gibberish or an error
 * implementation:
 */

const key = Buffer.from('12345678901234567890123456789012'); //key must match algorithm length - 32 for AES-256

//a fixed iv: 16 for AES-256-cbc
const iv = Buffer.from('1234567890123456');

const cipher = crypto.Cipheriv('aes-256-cbc', key, iv);
//encryption:
let encrypted = cipher.update('hello world', 'utf8', 'base64')
encrypted += cipher.final('base64');
console.log(`\n encrypted: ${encrypted}`);

//decryption
const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
let decrypted = decipher.update(encrypted, 'base64', 'utf8');
decrypted = decrypted + decipher.final('utf8');

console.log(`\n decrypted text: ${decrypted}\n`)


/**sign() & verify()
 * sign() creates a digital signature from some data using a private key
 * this signature proves that the data came from the owner of private key and has not been tampered with
 * verify then checks that signature,and it fails if the signature or data do not match
*/

/**random data and secrets
 * randombytes(): takesin a size and generates cryptographically secured tokens
 * good for generating UUIDs..universally unique identification
 * an upgrade from the unsecure Math.random()
 * the randomInt(): takes a min,max value and returns a secure integer btn them
 *createSecretkey(): taks in a buffer and generates a raw byte wrapped into a keyObject
*/

const randomData = crypto.randomBytes(16);
console.log(`randomdata: `, randomData.toString('base64'));
console.log(crypto.randomInt(5, 10));
const secretKey = crypto.createSecretKey(crypto.randomBytes(20));

console.log(secretKey.export().toString('hex'));