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
        eng: 'cont_eng'
    }
}

const filenames = fs.readdirSync(path.join(__dirname, './endpoints'))
filenames.forEach(file=>{
    content = require(path.join(path.join(__dirname, './endpoints'),file))
    config["endpoints"][content.name]=content
})

config["bindTables"]=require('./bindTables')
module.exports = config