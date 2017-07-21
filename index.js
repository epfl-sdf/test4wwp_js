var express = require('express');
var app = express();
var url = require('url');
var path = require('path');
var querystring = require('querystring');
var zHeader = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" ' +
             '"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html>' +
             '<head><meta charset="utf-8"><title>Console de comparaison visuelle V1.0</title></head>' +
             '<body style="margin:0px;padding:0px;overflow:hidden">';

app.use(express.static(path.join(__dirname, './public')));

app.get('/', function(req, res) {
  var params = querystring.parse(url.parse(req.url).query);
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  res.write(zHeader);
  if ('url1' in params && 'url2' in params) {
    var iframe1 = '<iframe id="frame1" src="' + params['url1'] + '" width="49%" style="height:95vh" align="left" scrolling="yes"></iframe>';
    var iframe2 = '<iframe id="frame2" src="' + params['url2'] + '" width="49%" style="height:95vh" align="right" scrolling="yes"></iframe>';
    res.write(iframe1);
    res.write(iframe2);
    res.write('<script src="iframes_sync_scrolling.js"></script>');
  } else {
    res.write('<a href="http://10.92.104.214:3000/?url1=http://leure.epfl.ch&url2=http://10.92.104.248:8081/test-web-wordpress.epfl.ch/v1-testwp/reme.html">test me</a>');
  }
  res.write('</body></html>');
  res.end();
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
