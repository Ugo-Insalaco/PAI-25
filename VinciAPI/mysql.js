const mysql=require('promise-mysql')
const config = require('./config')

const pool = mysql.createPool({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
})

module.exports=pool