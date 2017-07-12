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
    res.writeHead(200, {"Content-Type": "text/html"});
	if ('url1' in params && 'url2' in params) {
		var iframe1 = '<iframe src="' + params['url1'] + '" width="49%" height="100000" align="left" scrollable="no"></iframe>';
		var iframe2 = '<iframe src="' + params['url2'] + '" width="49%" height="100000" align="right" scrollable="no"></iframe>';

	    res.write(iframe1);
		res.write(iframe2);
	}
    else {
        res.write('<a href="http://10.92.104.214:3000/?url1=http://leure.epfl.ch&url2=http://10.92.104.248:8081/test-web-wordpress.epfl.ch/v1-testwp/reme.html">test me</a>');

    }
    res.end();
})

//route une fichier HTML statique
app.get('/tata.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/tata.html'));
})

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
})


//ssh -D 3333 ubuntu@zuzu123.node.consul
