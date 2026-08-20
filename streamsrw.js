//streaming the data
const fsops = require('fs');

const reading = fsops.createReadStream('./documents/lorem.txt', {encoding : 'utf8'});
const writing = fsops.createWriteStream('./documents/lorem2.txt');

reading.on('data' , (chunk) => {
    console.log('-----CHUNK VERI CEKILIYOR------');
    console.log(chunk);
    writing.write('\n YENI CHUNK \n');
    writing.write(chunk);
})

//PIPING - EASIER WAY
reading.pipe(writing);