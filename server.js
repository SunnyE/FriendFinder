// dependancies

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var PORT = process.env.PORT || 3000; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

var staticfolder = __dirname + "/app/public";
app.use(express.static(staticfolder));

require('./app/routing/api-routes')(app);
require('./app/routing/html-routes.js')(app);

app.listen(PORT, function() {
    console.log("Listening on PORT  " + PORT);
});