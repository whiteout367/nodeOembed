var express = require('express');
var app = express();
var port = 3000;
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var fs = require("fs")

// // Other settings
app.set('view engine', 'ejs'); 

app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname+'/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

// Routes
app.use('/', require('./routes/oembedTest'));


app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
});