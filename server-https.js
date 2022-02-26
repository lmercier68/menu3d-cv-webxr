const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('serverreact.key'),
    cert: fs.readFileSync('serverreact.cert')};

https.createServer(options, (req, res) => {
    if(req.url =="/"){
        console.log('in boucle'+req.url);
        res.writeHead(301,{Location: 'https://localhost/index.html'});
    };
    console.log('out boucle'+req.url);
    res.end();})
    .listen(443);