const pool = require('./mysql')
const jsonParser = require('body-parser').json()
const xss = require('xss')

const languageParser = function(req,res,next){
    req.language=xss(req.get('language'))
    req.lang_table = (req.language == 'fra') ?'contents_fra' : 'contents_eng'
    next()
}

const inserer_text = function(pool, text, id, table){
    pool
    .then(pool=>{
        pool
        .query(`INSERT INTO ?? SET ('id', 'text') VALUES (?,??)`, [table, id, text])
    })
}
const text = function(app){
    app.get('/api/text/:id', languageParser, function(req,res){
        const id = parseInt(xss(req.params.id))
        const lang = xss(req.get('langage'))
        console.log(`le langage envoyé est ${lang}`)
        pool
        .then(pool=>{
            pool
            .query('SELECT* FROM ?? WHERE id=?', [req.lang_table, id])
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

    app.post('/api/text/:id', jsonParser, languageParser, function(req,res){
        const body = xss(req.body)
        const id = parseInt(xss(req.params.id))
        console.log(body)
        //res.send(JSON.stringify({message: "post reçu"}))
        if(body.picture_url){
            console.log("insertion d'image")
            pool
            .then(pool=>{
                pool
                .query(`INSERT INTO 'contents_fra' SET ('id', 'picture_url') VALUES (?,??)`, [id, body.picture_url])
            })
            .then(pool=>{
                pool
                .query(`INSERT INTO 'contents_eng' SET ('id', 'picture_url') VALUES (?,??)`, [id, body.picture_url])
            })
            .then(()=>{
                res.status(200).send(`Texte ajouté : ${id}`)
            })
        }
        else if(body.text){
            console.log('insertion de text')
            pool
            .then(pool=>{
                inserer_text(pool, body.text, id, 'contents_fra')
            })
            .then(pool=>{
                inserer_text(pool, body.text, id, 'contents_eng')
            })
            .then(()=>{
                res.status(200).send(`Texte ajouté : ${id}`)
            })
        }
        else{
            res.status(400).send("Arguments manquants : picture_url ou text")
        }
    })

    app.patch('/api/text/:id', jsonParser, languageParser, function(req,res){

    })

    app.delete('/api/text/:id', languageParser, function(req, res){

    })
}

module.exports = {text: text, languageParser: languageParser}