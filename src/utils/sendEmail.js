'use strict';
import nodemailer from 'nodemailer';

// create reusable transporter object using the default SMTP transport
const sendEmail = (mailOptions) =>{
	let transporter = nodemailer.createTransport({
		host: "smtp.ethereal.email",
		port: 587,
		secure: false, // true for 465, false for other ports
		auth: {
			user: "paarwb7mwfbfj3nj@ethereal.email",
			pass: "xPan3r8y5nhSN1XWtd" 
		}
	});
	// send mail with defined transport object
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return console.log(error);
		}
		console.log('Message sent: %s', info.messageId);
		// Preview only available when sending through an Ethereal account
		console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
	});
}

module.exports sendEmail;

