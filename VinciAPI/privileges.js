const privileges = function(priv){
    let middleware = function(req, res, next){
        if((priv==="AD"&& req.privileges==="admin") || (priv==="US")){
            next()
        }
        else{
            res.status(401).send(JSON.stringify({
                message: 'Ressource non autorisée (admin seulement)',
                route: req.path,
                erreur: {}
            }))
        }
    }

    return middleware
}

module.exports = privileges
