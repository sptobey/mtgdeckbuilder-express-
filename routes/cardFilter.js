module.exports = function(app){
    app.get('/cards/cardSearch', function(req, res){
        res.render('cards/cardSearch.jade', {
        })
    })
}