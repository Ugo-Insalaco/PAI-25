const fs = require('fs')
const path = require('path')

config = {
    mysql: {
        host: 'localhost',
        user: 'iot',
        password: 'pwd',
        database: 'iot'
    },
    endpoints: {},
    content_tables:{
        fra: 'cont_fra',
        eng: 'cont_en'
    },
    auth:{
        privateKey:"MIIBOAIBAAJAbL7UgvSrvnd9oTysULLcm0W/Laz/aSqjyHs19Uh5w4V0ICZlNpybUzWumeROb+EgBoPNXNwKJOOAKEdrI1p0uwIDAQABAkBBnfBrSKmtFzr2JL8xPowBIVfXftDrK3CCk14esGnQwRU5wGot+OSE1mw5m456ZWNYIBABLOuBw3zJOGR4qUhJAiEAw+NhbJSllJ5+ZrYN67DSKYbBNb4OrTYbvuamMaKqEu0CIQCOHawh36vTQvzJsVTfotPpe9WfuUlNiLQ6E2TXLJxpRwIgXdOo05hzozczdkEXc+AzGh7oprRNVVwIeC0ER9wROJUCIGTpDtuynahR7Xstrq1pSf2FD8ftYe5q/kYqlTTwmVNrAiAxk9dk9akDc6g8Cd0R3aMf6G5x/XneCD9SqKumM1Wfew=="
    },
    bcrypt:{
        rounds:10
    }
}

const filenames = fs.readdirSync(path.join(__dirname, './endpoints'))
filenames.forEach(file=>{
    content = require(path.join(path.join(__dirname, './endpoints'),file))
    config["endpoints"][content.name]=content
})

config["bindTables"]=require('./bindTables')
module.exports = config
