var http = require('http');
const https = require('https');
const url = require('url');

const my_url = url.parse("https://www.google.fr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png");
const server = http.createServer((req, res) => {

    if (req.url === '/google') {
        https.get(my_url, function(res1){
            res1.pipe(res);
        });
    } else {
        res.end();
    };
});
server.listen(9000);