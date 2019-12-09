const path = require('path');
const fs = require('fs');

//create folder
/*
fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
    if (err) throw err;
    console.log('Folder Created...')
});
*/

//create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello Worlds!', (err) => {
    if (err) throw err;
    console.log('File Written to...')

    //since writeFile is asyncronous we should put the appendFile in the callback
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love node JS', (err) => {
        if (err) throw err;
        console.log('File Written to...')
    });

    fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data)
    });
});

