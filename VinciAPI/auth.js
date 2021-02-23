const parsers = require('./parsers')
const pool = require('./mysql')
const config = require('./config')
const jwt = require('jsonwebtoken')
const uuid = require('uuid')
const cookieParser = require('cookie-parser')

const auth = function(app){
    app.post('/auth/login', parsers.jsonBody_parser({username:"mandatory",password:"mandatory"}), function(req,res){
        // vérification du l'utilisateur
        pool.then(pool=>{
            // à faire : masquer le mot de passe de l'utilisateur
            let sqlString = 'SELECT ?? FROM ?? WHERE ?? = ? AND ?? = ?'
            let sqlValues = [
                config.endpoints.user.primaryField,
                config.endpoints.user.table,
                config.endpoints.user.connexionFields.username,
                req.body.username,
                config.endpoints.user.connexionFields.password,
                req.body.password
            ]
            pool.query(sqlString, sqlValues)
            .then(rows=>{
                if(rows.length>1){
                    throw JSON.stringify({
                        message: 'Erreur Base de données',
                        route: req.path,
                        erreur: {
                            CODE: 'INTERNAL_DATABASE_ERROR',
                            message: 'L\'utilisateur n\'est pas unique, erreur interne du serveur'
                        }
                    })
                }
                else if (rows.length === 0){
                    throw JSON.stringify({
                        message: 'Utilisateur non trouvé',
                        route: req.path,
                        erreur: {
                            CODE: 'USER_NOT_FOUND',
                            message: 'L\'utilisateur n\'existe pas'
                        }
                    })
                }
                else{
                    return rows[0]
                }
            })
            .then(row=>{
                //protection csrf
                const csrf = uuid.v4()
                const token = jwt.sign(
                    {username : req.body.username, id: row.id, csrf: csrf},
                    config.auth.privateKey
                )
                res.cookie('VinciApp_authToken',token)
                res.send({
                    csrf:csrf,
                    cookie: token
                })
            })
            .catch(err=>{
                res.status(404).send(err)
            })
        })
    })

    app.get('/auth/logout', cookieParser, function(req, res){
        res.send('logout')
    })
}

module.exports = auth