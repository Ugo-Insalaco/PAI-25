const express = require('express')

const text = require('./VinciAPI/text').text
const languageParser = require('./VinciAPI/text').languageParser
const endpoints = require('./VinciAPI/endpoints')
const cors = require('cors')
const mail = require('./VinciAPI/mail')
const auth = require('./VinciAPI/auth')

const app = express()

app.use(cors())

app.use('/',languageParser)

//text(app)

endpoints(app)

auth(app)

mail(app)

app.listen(3000)