const parsers = require('./parsers')
const pool = require('./mysql')
const config = require('./config')
const jwt = require('jsonwebtoken')
const uuid = require('uuid')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')

const auth = function(app){
    app.post('/auth/login', parsers.jsonBody_parser({username:"mandatory",password:"mandatory"}), function(req,res){
        // vérification du l'utilisateur
        pool.then(pool=>{
            // à faire : masquer le mot de passe de l'utilisateur
            let sqlString = 'SELECT ??, ?? FROM ?? WHERE ?? = ?'
            let sqlValues = [
                config.endpoints.user.primaryField,
                config.endpoints.user.connexionFields.password,
                config.endpoints.user.table,
                config.endpoints.user.connexionFields.username,
                req.body.username
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
                //vérification du mdp
                bcrypt.compare(req.body.password, row.password, function(err, match){
                    if(err){
                        res.status(500).send({
                            message: 'Erreur comparaison des mots de passe',
                            route: req.path,
                            erreur: {
                                CODE: 'PASSWORD_COMPARISON_ERROR',
                                message: 'La comparaison du mot de passe a échouée',
                                error:err
                            }
                        })
                    }
                    else if(match===true){
                        //protection csrf
                        const csrf = uuid.v4()
                        const token = jwt.sign(
                            {username : req.body.username, id: row.id, csrf: csrf},
                            config.auth.privateKey
                        )
                        res.cookie('vinci_auth_token',token)
                        res.send({
                            csrf:csrf,
                            cookie: token
                        })
                    }
                    else{
                        res.status(400).send({
                            message: 'Mot de passe incorrect',
                            route: req.path,
                            erreur: {
                                CODE: 'INVALID_PASSWORD',
                                message: 'Le mot de passe est incorrect',
                                error:err
                            }
                        })
                    }
                })
            })
            .catch(err=>{
                res.status(404).send(err)
            })
        })
    })

    app.get('/auth/logout', function(req, res){
        res.clearCookie('vinci_auth_token')
    })
}

module.exports = auth
