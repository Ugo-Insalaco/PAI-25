const config=require('./config')
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
    if(!responseTemplate.data){
        throw "NO_RESPONSE_DATA"
    }
    rows.forEach(row=>{
        let dataObject = {
            id: responseTemplate.data.id,
            fields: responseTemplate.data.fields,
            included:[]
        }
        includes.forEach(inclusion=>{
            if(!responseTemplate.data.included){
                throw `NO_INCLUSION_DATA`
            }
            else if(!responseTemplate.data.included[inclusion.name]){
                throw `NO_INCLUSION_DATA (${inclusion.name})`
            }
            dataObject.included.push(responseTemplate.data.included[inclusion.name])
        })
        try{
            rowParser(dataObject, row)
        }
        catch(e)
        {
            throw "INVALID_PARSING_CONFIGURATION"
        }
        response.data.push(dataObject)
    })
    return response
}

const rowParser = function(dataObject, row){
    for(let key in dataObject){
        if(typeof dataObject[key] === "string"){ 
            let field = dataObject[key].match(valueRegExp)    
            if(field!=null){
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