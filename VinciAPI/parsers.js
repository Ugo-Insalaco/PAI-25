const Promise = require('bluebird')
const xss = require('xss')
const config = require('./config')
const jsonParser = require('body-parser').json()
const cookieParser = require('cookie-parser')

const URL_parser = function(req, res, next){
    let params = {
        include: [
            
        ]
    }
    if(req.url.split('?').length>1){
        Promise.try(function(){
            req.url
            .split('?')[1]
            .split('&')
            .forEach(expression=>{
                let [param, values]=expression.split('=')
                params[xss(param)]=values
                .split(',')
                .map(value=>xss(value))
            })
            return params
        })
        .then(params=>{
            req.urlParams = params
            next()
        })
        .catch(err=>{
            res.status(400).send(JSON.stringify({
                message: 'Erreur décodage URL',
                route: req.path,
                erreur: {
                    CODE: 'INVALID_URL_PARAMETERS',
                    message: 'Erreur décodage URL'
                }
            }))
        })
    }
    else{
        req.urlParams=params
        next()
    }
}

const languageParser = function(req,res,next){
    req.language=xss(req.get('language'))
    config.endpoints.text.table = (req.language == 'fra') ?config.content_tables.fra : config.content_tables.eng
    next()
}

const jsonBodyParser = function(data){
    return function(req, res, next){
        // vérifier que le Body contient exactement les éléments de data
        Promise.try(function(){
            jsonParser(req, res, (err)=>{
                if(err){
                    throw err
                }
            })
        })
        .then(()=>{
            Object.keys(req.body)
            .forEach(key=>{
                value = xss(req.body[key])
                req.body[key]=undefined
                req.body[xss(key)]=value
            })
        })
        .then(()=>{
            if(Object.keys(req.body).every(key=>data[xss(key)]!==undefined) && 
            Object.keys(data).filter(key=>data[key].split(' ').includes("mandatory")).every(key=>req.body[xss(key)]!==undefined)
            ){
                next()
            }
            else{
                throw "Erreur"
            }
        })
        .catch(err=>{
            res.status(400).send(JSON.stringify({
                message: 'Erreur Parsing des données',
                route: req.path,
                erreur: {
                    CODE: 'INVALID_BODY_PARAMETERS',
                    message: 'Erreur parsing des données du Body des paramètres sont manquants ou invalides'
                }
            }))
        })
    }
}
module.exports = {
    URL_parser: URL_parser,
    language_parser: languageParser,
    jsonBody_parser: jsonBodyParser,
    cookie_parser: cookieParser
}