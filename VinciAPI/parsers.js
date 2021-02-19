const Promise = require('bluebird')
const xss = require('xss')
const config = require('./config')

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

module.exports = {
    URL_parser: URL_parser,
    language_parser: languageParser
}