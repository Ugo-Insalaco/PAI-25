const nodemailer = require("nodemailer");
<<<<<<< HEAD
=======
//const details = require("./endpoints/details.json");

const log = console.log;
>>>>>>> 8f6290b830cbfb3738e2bcf2adcd9e28fcf4a87f
const mail = function(app){
  app.post("/sendmail", (req, res) => {
    console.log("request came");
    let userContact = req.body;
    console.log(userContact);
    sendMail(user, info => {

      res.send(info);
    });
  });

  async function sendMail(user, callback) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });



    var mailOptions = {
      from: user.email,
      to: '',
      subject: user.object,
      text: 'That was easy!',
      attachments: [
      {   // file on disk as an attachment
        filename: 'Résumé de demande ',
        path: '' // stream this file
    }]
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);

    callback(info);
  }

}

module.exports = mail
