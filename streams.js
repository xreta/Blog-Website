const fs = require('fs');

//reading through streams
const readStream = fs.createReadStream('./timepass.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./newtext.txt');
// readStream.on('data', (chunk) => {
//     console.log('---- NEW CHUNK ----');
//     console.log(chunk);
//     writeStream.write('\n NEW CHUNK \n');
//     writeStream.write(chunk);
// });
readStream.pipe(writeStream); 