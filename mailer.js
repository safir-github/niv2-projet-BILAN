const nodemailer = require('nodemailer');

// Configuration de Nodemailer avec Maildev
const transporter = nodemailer.createTransport({
  host: 'localhost',   // Maildev fonctionne sur localhost
  port: 1025,          // Le port par défaut de Maildev
  secure: false        // Pas besoin de SSL pour Maildev
});

const sendMail = (name, email, subject, message, callback) => {
  const mailOptions = {
    from: email,  // L'adresse de l'expéditeur
    to: 'artisan@example.com',  // Adresse de l'artisan (remplace par une vraie adresse)
    subject: subject,
    text: `Message de ${name} : ${message}`
  };

  // Envoi de l'email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return callback(error);
    }
    console.log('Email envoyé :', info.response);
    callback(null, info);
  });
};

module.exports = sendMail;
