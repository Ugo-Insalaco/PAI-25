const express = require('express')

const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser')
const token = require('./VinciAPI/token')
const languageParser = require('./VinciAPI/text').languageParser

const multer = require('multer')
const storage = multer.diskStorage({
	destination: (req, file, callBack) => {
		callBack(null, './VinciApp/src/assets/images')
	},
	filename: (req, file, callBack) => {
		callBack(null, file.originalname)
	}
})
var upload = multer({storage: storage})

const endpoints = require('./VinciAPI/endpoints')
const cors = require('cors')
const mail = require('./VinciAPI/mail')
const auth = require('./VinciAPI/auth')
const fileupload = require('./VinciAPI/fileUpload')

const app = express()

var corsOptions = {
	origin: 'http://localhost:4200', // Changer pour l'adresse du serveur angular en mise en production
	optionsSuccessStatus: 200,
	credentials: true
}
app.use(cors(corsOptions))

app.use('/api',languageParser,cookieParser(), token)

endpoints(app)

auth(app)

mail(app)

app.use(bodyParser.json());

fileupload(app,upload)

app.listen(3000)
