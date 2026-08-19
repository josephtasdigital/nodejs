//FILE SYSTEM OPS


//READING

const fsops = require('fs');
fsops.readFile('./documents/text.txt', (err, data) => {
    if (err){
        console.log(err)
    }
    console.log(data.toString());
});

console.log('done.'); 


//WRITING       

fsops.writeFile('./documents/text.txt', 'Josephtasdigital', () => {
    console.log("dosya yazildi");
}); 

fsops.writeFile('./documents/text2.txt', 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.', () => {
    console.log("dosya yazildi");
})


//DIRECTORY CREATE

if (!fsops.existsSync('./sources')){
    fsops.mkdir('./sources', (err) => {
    if(err){
        console.log(err);
    }
    console.log('dosya olusturuldu');
})}
else
{fsops.rmdir('./sources', (err) => {
    if(err){
        console.log(err);
    }
    console.log('dosya adi silindi, tekrar olusturun');
})}



//DELETE

if (fsops.existsSync('documents/silbeni.txt')){
    fsops.unlink('documents/silbeni.txt', (err) => {
        if(err){
            console.log(err);
        }
        console.log("dosya silindi.");
    })}

