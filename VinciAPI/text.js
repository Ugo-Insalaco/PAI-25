const pool = require('./mysql')
const jsonParser = require('body-parser').json()
const config = require('./config')
const xss = require('xss')

const languageParser = function(req,res,next){
    req.language=xss(req.get('langage'))
    req.lang_table = (req.language == '"FRA"') ?'cont_fra' : 'cont_en'
    config.endpoints.text.table = (req.language == '"FRA"') ?config.content_tables.fra : config.content_tables.eng
    next()
}

module.exports = { languageParser: languageParser}
