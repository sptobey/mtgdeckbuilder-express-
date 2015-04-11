
module.exports = function(app){
    
    app.get('/cards/cardSearch', function(req, res){
        
        // https://api.mtgdb.info/content/hi_res_card_images/{multiverseid}.jpg
        
        // $.get("http://api.mtgdb.info/cards/random", function(data) {
        //     console.log("Random Card:", data);
        // });
        
        res.render('cards/cardSearch.jade', {
        })
    })
}
