const config=require('./config')
const tools = require('./tools')

const valueRegExp = /{{(.*)}}/
const get_response = function(rows, endpoint, includes){
    //récupération du template de la réponse et initialisation de l'objet réponse
    const responseTemplate = config.endpoints[endpoint].get_response
    if(!responseTemplate){
        throw "NO_RESPONSE_TEMPLATE"
    }
    let response = {
        route:responseTemplate.route,
        method:responseTemplate.method,
        data:[]
    }
    // Object data temporaire récupérant les données de chaque ligne
    let data = []
    if(!responseTemplate.data){
        throw "NO_RESPONSE_DATA"
    }
    var dataObject = {}
    rows.forEach(row=>{
        dataObject =  JSON.parse(JSON.stringify({
            id: responseTemplate.data.id,
            fields: responseTemplate.data.fields,
            included:{}
        }))
        includes.forEach(inclusion=>{
            if(!responseTemplate.data.included){
                throw `NO_INCLUSION_DATA`
            }
            else if(!responseTemplate.data.included[inclusion.name]){
                throw `NO_INCLUSION_DATA (${inclusion.name})`
            }
            // récupération du template pour chaque inclusion
            dataObject.included[inclusion.name]=JSON.parse(JSON.stringify(responseTemplate.data.included[inclusion.name]))
        })
        try{   
            // Attribution des valeurs de la ligne à un nouveau dataObject
            rowParser(dataObject, row)
        }
        catch(e)
        {
            throw "INVALID_PARSING_CONFIGURATION"
        }
        data.push(dataObject)
    })
    // mise en forme des dataObjects du tableau data dans l'objet final response
    data.forEach(dataObject=>{
        let array = response.data.filter(responseDataObject=>{
            return responseDataObject.id===dataObject.id
        })
        // S'il existe déjà un objet avec le même identifiant que le dataObject courant
        if(array.length>0){
            let id = response.data.indexOf(array[0])
            // On vérifie quelles inclusions ajouter puis on les ajoute pour pas de redondance
            includes
            .map(inclusion=>inclusion.name)
            .forEach(inclusionName=>{
                if(!(response.data[id].included[inclusionName].find(inclusion=>
                    tools.arrayEquals(inclusion.id,dataObject.included[inclusionName].id))) && dataObject.included[inclusionName].id!==null){
                    response.data[id].included[inclusionName].push(dataObject.included[inclusionName])
                }
            })
        }
        // si l'objet trouvé est le seul à avoir l'id recherché
        else{
            let inclusionObject = {}
            // On créé un nouvel objet dans le tableau response.data
            includes
            .map(inclusion=>inclusion.name)
            .forEach(inclusionName=>{
                if(dataObject.included[inclusionName].id!==null){
                    inclusionObject[inclusionName]=[JSON.parse(JSON.stringify(dataObject.included[inclusionName]))]
                }else{
                    inclusionObject[inclusionName]=[]
                }
            })
            response.data.push({
                id: dataObject.id,
                fields: dataObject.fields,
                included: JSON.parse(JSON.stringify(inclusionObject))
            })
        }
    })
    return response
}

const rowParser = function(dataObject, row){
    for(let key in dataObject){
        if(typeof dataObject[key] === "string"){ 
            let field = dataObject[key].match(valueRegExp)    
            if(field!==null){
                dataObject[key] = row[field[1]]
            }
        }
        else if (typeof dataObject[key] === "object"){
            rowParser(dataObject[key], row)
        }
    }
}
module.exports = {
    get_response: get_response
}