const fsops = require('fs');

const reading = fsops.createReadStream('./documents/lorem.txt', {encoding : 'utf8'});

reading.on('data' , (chunk) => {
    console.log('-----CHUNK VERI CEKILIYOR------');
    console.log(chunk);
})

