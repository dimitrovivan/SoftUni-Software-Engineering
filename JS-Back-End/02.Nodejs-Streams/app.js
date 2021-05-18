const fs = require('fs');
const path = require('path');

let readPathname = path.normalize(path.join(__dirname, './text.txt'));
let readStream = fs.createReadStream(readPathname, {encoding:'utf8', highWaterMark: 1000});

let writePathname = path.normalize(path.join(__dirname, './write.txt'));
let writeStream = fs.createWriteStream(writePathname, {encoding:'utf8'});

fs.readdir('.', 'utf8', (err, data) => {
    if(err) return  console.log(data);

    console.log(data);
});

readStream.on('data', (data) => {
    console.log(data);
    writeStream.write(data, (err) => {
        if(err) return console.log(err);
    })
})

readStream.on('end', () => writeStream.end(() => console.log('Writing ended')));