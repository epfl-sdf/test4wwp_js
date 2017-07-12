//nodejs-hello-world
//Petit Helloworld en nodejs pour tester le remote debugger
//zf170322.1550
//MIT License
//Copyright (c) 2017 christian@zufferey.com

var express = require('express')
var app = express()
var url = require('url');
var path = require('path');
var querystring = require('querystring')

//route en dynamique

//route sur URL: http://zuzu123-1:3000/copernic/?toto=123&tutu=234
app.get('/', function(req, res) {
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, {
        "Content-Type": "text/html"
    });
    if ('url1' in params && 'url2' in params) {
        var html = '<!DOCTYPE html>' +
            '<head>' +
            '<meta charset="utf-8">' +
            '<title>Comparateur</title>' +
            '</head>' +
            '<body>' +
            '<iframe id="FRAME_1" src="' + params['url1'] + '" width="49%" height="1000" align="left"></iframe>' +
            '<iframe id="FRAME_2" src="' + params['url2'] + '" width="49%" height="1000" align="right"></iframe>' +
            '</script>' +
            '</body>' +
            '</html>';
        res.write(html);
    } else {
        res.write('ajoutez ?url1&url2 aux paramètres');
    }
    res.end();
})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})


//ssh -D 3333 ubuntu@zuzu123.node.consul
