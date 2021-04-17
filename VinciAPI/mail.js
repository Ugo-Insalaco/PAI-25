const nodemailer = require("nodemailer");
const PDFDocument = require('pdfkit');
const fs = require('fs');
const bodyParser = require('body-parser')


const mail = function(app){
    app.use(bodyParser.json())
    app.post('/sendEmail', function(req,res){
       
        data=req.body
        res.send( "req.body");
        console.log(data)

        var doc = new PDFDocument;
        doc.pipe(fs.createWriteStream('demande.pdf'));
        generateHeader(doc)
        generateCustomerInformation(doc, data)
        
        

        
       

        let buffers = [];
        doc.on('data', buffers.push.bind(buffers));
        doc.on('end', () => {

        let pdfData = Buffer.concat(buffers);
        var mailOptions = {
          from: "vinciwebapp@gmail.com",
          to: "karim.nanaa@vinci-facilities.com", 
          subject: 'Demande',
          text: 'la demande est en pdf !',
          attachments: [{
             filename: 'demande.pdf',
             content: pdfData,
          }],
        };
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com', 
            auth: {        
                user: 'vinciwebapp@gmail.com',        
                pass: 'sa97.MHpo'    
           },
    
        });
        transporter.sendMail(mailOptions, function(error, info){
             if (error) {
                        console.log(error);
             } else {
                        console.log('Email sent: ' + info.response);
      }
    });
    


});







doc.end();
      
  });

}
//Header du PDF
function generateHeader(doc) {
  doc
    .image("/home/sirine/pdfkit-project/logo.png", 50, 45, { width: 150})
    .fillColor("#444444")
    .moveDown();
  doc.moveDown();
  doc.moveDown();
 
  doc.fontSize(7)
    .text(`Date de la demande : ${formatDate(new Date())}` ,50, 65, { align: "right" })

    
    .moveDown();
    
}
//Body PDF selon le format souhaité 
function generateCustomerInformation(doc, data) {
  doc
    .fillColor("#444444")
    .fontSize(20)
    .text("Information personnelle", 50, 160);

  generateHr(doc, 185);

  var customerInformationTop = 200;

  doc
    .fontSize(10)
    .text("Civilité:", 50, customerInformationTop)
    .font("Helvetica")
    .text(data.Civilite, 150, customerInformationTop)
    .font("Helvetica")
    .text("Nom:", 50, customerInformationTop + 15)
    .text(data.Name, 150, customerInformationTop + 15)
    .text("Prénom:", 50, customerInformationTop + 30)
    .text(data.Surname,150,customerInformationTop + 30 )
    .font("Helvetica")
    .fontSize(10)
    .text("téléphone:", 50, customerInformationTop+45)
    .font("Helvetica")
    .text(data.Telephone, 150, customerInformationTop+45)
    .font("Helvetica")
    .fontSize(10)

    .text("Email:", 50, customerInformationTop + 60)
    .text(data.Email, 150, customerInformationTop + 60)
    .text("Adresse:", 50, customerInformationTop + 75)
    .text(data.Street,150,customerInformationTop + 75 )
    .font("Helvetica")
    .text("Ville:", 50, customerInformationTop + 90)
    .text(data.city, 150, customerInformationTop + 90)
    .text("zip:", 50, customerInformationTop +105)
    .text(data.zip,150,customerInformationTop + 105 )
    .font("Helvetica")
    
   
    .moveDown();

  generateHr(doc,320);
  doc
  .fillColor("#444444")
  .fontSize(20)
  .text("Sujet de Demande", 50, 340);

generateHr(doc, 360);
 customerInformationTop = 375;
doc
.fontSize(10)
.text("Objet de la demande:", 50, customerInformationTop)
.font("Helvetica")
.text(data.object, 150, customerInformationTop)
.font("Helvetica")
.text(" segment d’activité:", 50, customerInformationTop + 15)
.text(data.activitySeg, 150, customerInformationTop + 15)
.text("Informations sur :", 50, customerInformationTop + 30)
.text(data.info,150,customerInformationTop + 30 )
.font("Helvetica")
.fontSize(10)
.text("message :", 50, customerInformationTop + 45)
.text(data.message,150,customerInformationTop + 45 )
.font("Helvetica")
.fontSize(10)
generateHr(doc,480);

}
//line dans le PDF
function generateHr(doc, y) {
  doc
    .strokeColor("#aaaaaa")
    .lineWidth(1)
    .moveTo(50, y)
    .lineTo(550, y)
    .stroke();
}
//formatage du type date 
function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return year + "/" + month + "/" + day;
}


module.exports = mail
