const path = require('path');
const fs   = require('fs');


//const fsPromise = fs.promises;
//fsPromises.mkdir(folder).then()=> {
    //code du callback
//})
// .then()
//.catch(err =>)
const options = {encoding: 'utf-8'};

const fromPath = path.resolve(__dirname, 'coucou.txt');
const folder = path.resolve(__dirname, 'jtutu');
const toPath = path.resolve(folder, 'coucou.txt');

console.log(fromPath);

//crée le folder jtutu
fs.mkdir('jtutu', function (err) {
    if (err && err.code !== 'EEXIST') {
        console.log('failed to create directory', err);
    }
    fs.readFile(fromPath, options,(error1,data) => {
        if (error1) throw error1;
        fs.writeFile(toPath, options,(error2)=>{
       if(error2) throw error2;
        });
    });
});
