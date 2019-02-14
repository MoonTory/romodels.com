import nodemailer from 'nodemailer';
import { v4 } from 'uuid';

export default {
  genConfirmationEmailLink: async (url, userId, redis) => {
    try {
      const id = v4();
      await redis.set(id, userId, 'ex', 60 * 60 * 24);
      return `${url}confirm/${id}`;
    } catch (error) {
      throw error;
    }
  },

  sendConfirmationEmail: async function(email, url) {
    // Generate test SMTP service account from ethereal.email
    const account = await nodemailer.createTestAccount();

    // create transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email', // Should use our custom domain for production.
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: account.user, // generated ethereal test user
        pass: account.pass // generated ethereal test password
      }
    });

    // setup email data with unicode symbols
    const mailOptions = {
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: email, // list of receivers
      subject: 'PlayFaded Confirmation Email', // Subject line
      text: 'Please confirm your email with the provided link', // plain text body
      html: `<a href=${url}>${url}</a>` // html body
    };

    // send mail with defined transport object
    const info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  }
};
