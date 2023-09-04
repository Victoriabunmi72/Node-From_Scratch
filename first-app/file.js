const  fs = require('fs');

//The Synchronoeus form...
//const files = fs.readdirSync('./');
//console.log(files);


//The Asynchronous form...
//fs.readdir('./', function(err, files) {  //To get the result.
fs.readdir('$', function(err, files) { // To get an error.
    if (err) console.log('Error', err);
    else console.log('Result', files);
});