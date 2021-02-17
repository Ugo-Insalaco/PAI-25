const config = require('./config')
const xss = require('xss')
const pool = require('./mysql')
const parsers = require('./parsers')
const responseParser = require('./responseParser')
const Promise = require('bluebird')

const confs = config.endpoints
const init = function(app){
    Object.keys(config.endpoints)
    .map(key=>confs[key])
    .forEach(conf=>{

        app.get(`/api/${conf.name}s/:id`, parsers.URL_parser, function(req, res){
            const id = parseInt(xss(req.params.id))
            console.log(`requête à ${req.path}`)

            // Requête des champs principaux
            let querrystring = ""
            let sqlvalues=[]
            for(let key in conf.fields){
                querrystring+= "?? AS ??, "
                sqlvalues.push(`0::${conf.name}.${key}`, `0::${conf.name}::${key}`)
            
            }
            // Vérifications des champs inclus
            let included = req.urlParams.include
            if(!(included.every(inclusion=>conf.include.map(confInclude=>confInclude.name).includes(inclusion)))){ // Check si les inclusions sont toutes des inclusions disponibles dans le fichier de configuration
                res.status(400).send(JSON.stringify({
                    message: 'Certaines inclusions n\'existent pas',
                    route: req.path,
                    erreur: {
                        CODE: "INVALID_INCLUSIONS",
                        message: 'Certaines inclusions n\'existent pas'
                    }
                }))
            }
            else{
                // Ajout des inclusions par défaut et récupération des données d'inclusions des fichiers de conf
                conf.include
                .filter(confInclude=>(confInclude.default_inclusion && !(included.includes(confInclude.name))))
                .map(confInclude=>{
                    included.push(confInclude.name)
                })
                included = included.map(inclusion=>conf.include.find(confInclude=>confInclude.name==inclusion))

                // Ajout des champs des inclusions (lorsque c'est des endpoints)
                const addInclusionFields = function(bind){
                    if(bind.hasOwnProperty('endpoint')){
                        for(let key in confs[bind.endpoint].fields){
                            querrystring+='?? AS ??, '
                            sqlvalues.push(`${bind.id}::${bind.endpoint}.${key}`,`${bind.id}::${bind.endpoint}::${key}`)
                        }
                    }
                    else if(bind.hasOwnProperty('bindTable')){
                        bind.proxy.forEach(proxy=>{
                            addInclusionFields(proxy)
                        })
                    }
                    return
                }

                included.forEach(inclusion=>{
                    inclusion.bind.forEach(bind=>{
                        addInclusionFields(bind)
                    })
                })
                querrystring = querrystring.slice(0,-2) // On retire la dernière virgule

                // Ajout de la table principale 
                let sqlstring = `SELECT ${querrystring} FROM ?? AS ?? `
                sqlvalues.push(conf.table, `0::${conf.name}`) 

                // Ajout des tables d'inclusion
                const addInclusionTables= function(bind, currentTable, currentId){
                    if(bind.hasOwnProperty('endpoint')){
                        sqlstring+= `JOIN ?? AS ?? ON ?? = ?? `
                        sqlvalues.push(confs[bind.endpoint].table, `${bind.id}::${confs[bind.endpoint].name}`, `${currentId}::${currentTable}.${bind.local_key}`, `${bind.id}::${confs[bind.endpoint].name}.${bind.foreign_key}`)
                    }
                    else if(bind.hasOwnProperty('bindTable')){
                        sqlstring+= `JOIN ?? AS ?? ON ?? = ?? `
                        sqlvalues.push(config.bindTables[bind.bindTable], `${bind.id}::${bind.bindTable}`, `${currentId}::${currentTable}.${bind.local_key}`,`${bind.id}::${bind.bindTable}.${bind.foreign_key}`)
                        bind.proxy.forEach(nextBind=>{
                            addInclusionTables(nextBind, bind.hasOwnProperty('bindTable') ? bind.bindTable : bind.endpoint, bind.id)
                        })
                    }
                }
                // Ajout des tables d'inclusion
                included.forEach(inclusion=>{
                    inclusion.bind.forEach(bind=>{
                        addInclusionTables(bind, conf.name, 0)
                    })
                })

                // Ajout des conditions
                sqlstring+=  `WHERE ??=?`
                sqlvalues.push(`0::${conf.name}.${conf.primaryField}`, id)

                // Requête à la base de données
                pool.then(pool=>{
                    pool
                    .query(sqlstring, sqlvalues)
                    .then(rows => {
                        Promise.try(()=>{
                            jsonResponse = responseParser.get_response(rows, conf.name, included)
                            res.send(jsonResponse)
                        })
                        .catch(err=>{
                            res.status(500).send(JSON.stringify({
                                message: 'Erreur parsing des données',
                                route: req.path,
                                erreur: err
                            }))
                        })
                    })
                    .catch(err=>{
                        res.status(500).send(JSON.stringify({
                            message: 'Erreur base de donnée',
                            route: req.path,
                            erreur: err
                        }))
                    })
                })

            }
        })

        app.post(`/api/${conf.name}s`, parsers.language_parser, function(req, res){
            console.log('requête POST effectuée')
            res.send({
                message: 'Post reçu'
            })
        })
    })
}

module.exports = init