var fs = require('fs');

fs.readFile('test.html', (err, data)=>{
    if(err) return console.log(err);
    console.log(data.toString());
});
