var express = require('express');
var app = express();

var jsforceAjaxProxy = require('jsforce-ajax-proxy');
app.all('/proxy/?*', jsforceAjaxProxy());

var port = process.env.PORT || 8080;

// Serve static files
app.use(express.static(__dirname + '/public'));

// Serve your app
console.log('Served: http://localhost:' + port);
app.listen(port);
