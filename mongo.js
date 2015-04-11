var express = require('express')
var app = express()

/* 
var dburl = ''
var db = require('monk')(dburl)
app.db = db
*/
app.set('view engine', 'jade')
app.use(express.static(__dirname + '/public'))
app.get('/', function(req, res){
    res.render('index.jade')
})

require('./routes/cardFilter')(app)



app.set('port', (process.env.PORT || 3000))

var server = app.listen(app.get('port'), function() {

    var host = server.address().address
    var port = server.address().port

    console.log('HERE http://%s:%s', host, port)
})