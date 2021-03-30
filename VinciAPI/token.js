const jwt = require('jsonwebtoken')
const config = require('./config.js')

const token = function(req, res, next){
    let csrf = req.get('X-csrf-token')
    let cookie = req.cookies['vinci_auth_token']
    if(cookie && csrf!==""){
        jwt.verify(cookie, config.auth.privateKey, function(err, decoded){
            if(err){
                res.status(401).send(JSON.stringify({
                    message: 'Session invalide',
                    route: req.path,
                    erreur: err
                }))
            }
            else if(decoded.csrf !== csrf){
                res.status(401).send(JSON.stringify({
                    message: 'Attaque csrf potentielle',
                    route: req.path,
                    erreur: err
                }))       
            }
            else{
                req.decoded = decoded
                req.privileges="admin"
                next()
            }
        })
    }
    else{
        req.privileges="user"
        next()
    }
}

module.exports = token