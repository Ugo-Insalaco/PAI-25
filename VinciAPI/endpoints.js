const config = require('./config')
const xss = require('xss')
const pool = require('./mysql')
const parsers = require('./parsers')
const responseParser = require('./responseParser')
const Promise = require('bluebird')
const bcrypt = require('bcrypt')

const confs = config.endpoints
const init = function(app){
    Object.keys(config.endpoints)
    .map(key=>confs[key])
    .forEach(conf=>{

        app.get(`/api/${conf.name}s/:id`, parsers.URL_parser, function(req, res){
            const id = parseInt(xss(req.params.id))
            console.log(`requête à GET ${req.path}`)

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
                        confs[bind.endpoint].include
                            .forEach(inclusion=>{
                                if(inclusion.default_inclusion===true){
                                    inclusion.bind.forEach(nextBind=>{
                                        addInclusionFields(nextBind)
                                    })
                                }
                            })
                    }
                    else if(bind.hasOwnProperty('bindTable')){
                        querrystring+='?? AS ??, '
                        sqlvalues.push(`${bind.id}::${bind.bindTable}.id`, `${bind.id}::${bind.bindTable}::id`)
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
                        sqlstring+= `LEFT JOIN ?? AS ?? ON ?? = ?? `
                        sqlvalues.push(confs[bind.endpoint].table, `${bind.id}::${confs[bind.endpoint].name}`, `${currentId}::${currentTable}.${bind.local_key}`, `${bind.id}::${confs[bind.endpoint].name}.${bind.foreign_key}`)
                        confs[bind.endpoint].include
                        .forEach(inclusion=>{
                            if(inclusion.default_inclusion===true){
                                inclusion.bind.forEach(nextBind=>{
                                    addInclusionTables(nextBind, bind.endpoint, bind.id)
                                })
                            }
                        })
                    }
                    else if(bind.hasOwnProperty('bindTable')){
                        sqlstring+= `LEFT JOIN ?? AS ?? ON ?? = ?? `
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
                                message: 'Erreur parsing de la réponse',
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

        app.get(`/api/${conf.name}s/`, parsers.URL_parser, function(req, res){
            const id = parseInt(xss(req.params.id))
            console.log(`requête à GET ${req.path}`)

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
                            confs[bind.endpoint].include
                            .forEach(inclusion=>{
                                if(inclusion.default_inclusion===true){
                                    inclusion.bind.forEach(nextBind=>{
                                        addInclusionFields(nextBind)
                                    })
                                }
                            })
                        }
                    }
                    else if(bind.hasOwnProperty('bindTable')){
                        querrystring+='?? AS ??, '
                        sqlvalues.push(`${bind.id}::${bind.bindTable}.id`, `${bind.id}::${bind.bindTable}::id`)
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
                        sqlstring+= `LEFT JOIN ?? AS ?? ON ?? = ?? `
                        sqlvalues.push(confs[bind.endpoint].table, `${bind.id}::${confs[bind.endpoint].name}`, `${currentId}::${currentTable}.${bind.local_key}`, `${bind.id}::${confs[bind.endpoint].name}.${bind.foreign_key}`)
                        confs[bind.endpoint].include
                        .forEach(inclusion=>{
                            if(inclusion.default_inclusion===true){
                                inclusion.bind.forEach(nextBind=>{
                                    addInclusionTables(nextBind, bind.endpoint, bind.id)
                                })
                            }
                        })
                    }
                    else if(bind.hasOwnProperty('bindTable')){
                        sqlstring+= `LEFT JOIN ?? AS ?? ON ?? = ?? `
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
                                message: 'Erreur parsing de la réponse',
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

        let postables = {}
        let shadows = []
        Object.keys(conf.fields)
        .map(key=>{
            let attr = conf.fields[key].split(' ')
            if(attr.includes('mandatory')){
                postables[key]="mandatory"
            }
            else if(attr.includes('optionnal')){
                postables[key]=""
            }
            if(attr.includes('shadow')){
                shadows.push(key)
            }
        })
        app.post(`/api/${conf.name}s`, 
        parsers.jsonBody_parser(postables), 
        function(req, res){
            console.log(`requête à POST ${req.path}`)

            //Initialisation de la requête SQL
            let sqlString = "INSERT INTO ?? (??, "
            let sqlValues= [conf.table, conf.primaryField]
            let idValue = "DEFAULT"

            //Ajout des colonnes à insérer
            Object.keys(req.body)
            .forEach(key=>{
                sqlString+="??, "
                sqlValues.push(key)
            })
            sqlString = sqlString.slice(0,-2)
            sqlString+= ") VALUES ({{id}}, "

            //Création des hash
            console.log(1)
            const crypted = shadows.map(shadow=>{
                if(req.body[shadow]!==undefined){
                    return bcrypt
                    .hash(req.body[shadow],config.bcrypt.rounds)
                    .then(hash=>{
                        console.log(2)
                        req.body[shadow]=hash
                        return hash
                    })
                }
            })
            Promise.all(crypted)
            .then(()=>{
                console.log(3)
                //Ajout des valeurs à insérer
                Object.values(req.body)
                .forEach(value=>{
                    sqlString+="?, "
                    sqlValues.push(value)
                })
                sqlString = sqlString.slice(0,-2)
                sqlString+=")"

                //Cas d'une insertion sur plusieurs tables
                if(conf.all_tables && conf.all_tables.length>1){
                    sqlValues[0]=conf.all_tables[0]
                    const firstSQL = sqlString.replace('{{id}}',idValue)
                    pool.then(pool=>{
                        pool
                        .query(firstSQL, sqlValues)
                        .then(rows=>{
                            idValue = rows.insertId
                            sqlString=sqlString.replace('{{id}}',idValue)
                            for(let i=1; i<conf.all_tables.length;i++){
                                sqlValues[0] =conf.all_tables[i]
                                pool.query(sqlString, sqlValues)
                            }
                        })
                        .then(()=>{
                            res.status(200).send({
                                route:`/api/${conf.name}s`,
                                method: "POST",
                                id: idValue
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
                //Cas d'une insertion dans une seule table
                else{
                    sqlString = sqlString.replace('{{id}}',idValue)
                    pool.then(pool=>{
                        pool
                        .query(sqlString, sqlValues)
                        .then(rows=>{
                            idValue = rows.insertId
                        })
                        .then(()=>{
                            res.status(200).send({
                                route:`/api/${conf.name}s`,
                                method: "POST",
                                id: idValue
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
            .catch(err=>{
                res.status(500).send(JSON.stringify({
                    message: 'Erreur de hachage',
                    route: req.path,
                    erreur: err
                }))
            })
        })

        conf.relationships.forEach(relation=>{

            let postables = {}
            Object.keys(relation.fields)
            .map(key=>{
                let attr = relation.fields[key].split(' ')
                if(attr.includes('mandatory')){
                    postables[key]="mandatory"
                }
                else if(attr.includes('optionnal')){
                    postables[key]=""
                }
            })

            app.post(`/api/${conf.name}s/:id/relationships/${relation.name}`,
            parsers.jsonBody_parser(postables), 
            function(req, res){
                console.log(`requête à POST ${req.path}`)

                //On vérifie que la relation n'existe pas déjà
                let sqlCheckString = 'SELECT id FROM ?? AS ?? WHERE '
                let sqlCheckValues = [config.bindTables[relation.bindTable], relation.bindTable]

                sqlCheckString+="??=? AND "
                sqlCheckValues.push(relation.key, xss(req.params.id))

                Object.keys(req.body)
                .forEach(key=>{
                    sqlCheckString+= "??=? AND ",
                    sqlCheckValues.push(key, req.body[key])
                })
                sqlCheckString+="1" 

                pool.then(pool=>{
                    pool
                    .query(sqlCheckString, sqlCheckValues)
                    .then(rows=>{
                        if(rows.length>0){
                            res.status(500).send(JSON.stringify({
                                message: 'La relation existe déjà',
                                route: req.path,
                                erreur: {}
                            }))
                        }
                        else{
                            //Initialisation de la requête SQL
                            let sqlString = "INSERT INTO ?? (??, "
                            let sqlValues= [config.bindTables[relation.bindTable], relation.key]
                            //Ajout des colonnes à insérer
                            Object.keys(req.body)
                            .forEach(key=>{
                                sqlString+="??, "
                                sqlValues.push(key)
                            })
                            sqlString = sqlString.slice(0,-2)
                            sqlString+= ") VALUES (?, "
                            sqlValues.push(req.params.id)

                            //Ajout des valeurs à insérer
                            Object.values(req.body)
                            .forEach(value=>{
                                sqlString+="?, "
                                sqlValues.push(value)
                            })
                            sqlString = sqlString.slice(0,-2)
                            sqlString+=")"

                            //Insertion dans la base de données
                            pool
                            .query(sqlString, sqlValues)
                            .then(rows=>{
                                idValue = rows.insertId
                            })
                            .then(()=>{
                                res.status(200).send({
                                    route:`/api/${conf.name}s/:id/${relation.name}`,
                                    method: "POST",
                                    id: idValue
                                })
                            })
                            .catch(err=>{
                                res.status(500).send(JSON.stringify({
                                    message: 'Erreur base de donnée',
                                    route: req.path,
                                    erreur: err
                                }))
                            })
                            
                        }
                    })
                })
            })
        })
    })
}

module.exports = init