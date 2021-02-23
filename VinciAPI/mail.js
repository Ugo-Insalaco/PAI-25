const mail = function(app){
    app.get('/mail', function(req, res){
        // Faire envoie de mail
        console.log('envoie de mail')
        res.send("mail envoyé")
    })
}

module.exports = mail