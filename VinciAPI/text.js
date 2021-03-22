const pool = require('./mysql')
const jsonParser = require('body-parser').json()
const xss = require('xss')

const languageParser = function(req,res,next){
    req.language=xss(req.get('language'))
    req.lang_table = (req.language == 'fra') ?'contents_fra' : 'contents_eng'
    next()
}

module.exports = { languageParser: languageParser}