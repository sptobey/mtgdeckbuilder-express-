
module.exports = function(app){
    
    var http = require('http');
    
    app.get('/cards/cardSearch', function(req, res){
        
        // https://api.mtgdb.info/content/hi_res_card_images/{multiverseid}.jpg
        // env(html, function (errors, window){
        //     var $ = require('jquery')(window)
        //     $.get("data/data.json", function(data) {
        //         console.log("Random Card:", data);
        //     });
        // })

        http.get("http://api.mtgdb.info/cards/random", function(res){
            res.on('data', function(data){
                console.log('BODY: ' + data)
            })
        })
        
        res.render('cards/cardSearch.jade', {
        })
    })
}
