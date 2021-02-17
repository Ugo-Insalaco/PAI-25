const pool = require('./mysql')
const jsonParser = require('body-parser').json()
const xss = require('xss')

const languageParser = function(req,res,next){
    req.language=xss(req.get('language'))
    req.table = (req.language == 'fra') ?'contents_fra' : 'contents_eng'
    next()
}
const text = function(app){
    app.get('/api/text/:id', languageParser, function(req,res){
        const id = parseInt(xss(req.params.id))
        const lang = xss(req.get('langage'))
        console.log(`le langage envoyé est ${lang}`)
        pool
        .then(pool=>{
            pool
            .query('SELECT* FROM ?? WHERE id_content_ENG=?', [req.table, id])
            .then(rows =>{
                if(rows.length!=1){
                    res.send(200).send("text temporaire")
                    //res.sendStatus(404)
                }
                else{
                    res.status(200).send(rows[0])
                }
            })
        })
    })

    app.post('/api/text/', jsonParser, languageParser, function(req,res){
        console.log(req.body)
        res.send(JSON.stringify({message: "post reçu"}))
    })

    app.patch('/api/text/:id', jsonParser, languageParser, function(req,res){

    })

    app.delete('/api/text/:id', languageParser, function(req, res){

    })
}

module.exports = {text: text, languageParser: languageParser}