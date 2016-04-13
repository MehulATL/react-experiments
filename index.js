// Server
var express = require('express');
var app = express();

// Store all environment variables
app.disable('etag');
app.set('port', process.env.PORT || 8080);
app.set('env', process.env.NODE_ENV || 'production');
// App middleware
app.use(express.static(__dirname + '/dist'));

app.listen(app.get('port'), function(){
  console.log('Fam, go to localhost:' + app.get('port'));
});
