const express = require('express')

const bodyParser = require("body-parser")
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

const languageParser = require('./VinciAPI/text').languageParser
const endpoints = require('./VinciAPI/endpoints')
const cors = require('cors')
const mail = require('./VinciAPI/mail')
const auth = require('./VinciAPI/auth')
const fileupload = require('./VinciAPI/fileUpload')

const app = express()

app.use(cors())

app.use('/',languageParser)

//text(app)

endpoints(app)

auth(app)

mail(app)

app.use(bodyParser.json());

fileupload(app,upload)

app.listen(3000)