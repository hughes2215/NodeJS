const path = require('path');
const fs = require('fs');
const request = require('request');
const rp = require('request-promise');
let dataPath = path.join(__dirname , '../chirps.json');



request('https://reddit.com/r/popular.json.', (err, res, body) =>{
  
if(err) console.log(err);

fs.writeFile(dataPath, res.body , err =>{
    if(err) console.log(err);
});

});