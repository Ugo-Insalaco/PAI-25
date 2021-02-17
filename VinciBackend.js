const express = require('express')

const text = require('./VinciAPI/text').text
const languageParser = require('./VinciAPI/text').languageParser
const endpoints = require('./VinciAPI/endpoints')
const cors = require('cors')

const app = express()

app.use(cors())

app.use('/',languageParser)

text(app)

endpoints(app)

app.listen(3000)