const nodemailer = require("nodemailer");

const {
  mail: { host, port, user, pass, to, from },
} = require("./configs");
const { getFormattedDate } = require("./utils");

const IS_PROD = process.env.NODE_ENV === "production";

const transporter = nodemailer.createTransport({
  host,
  port,
  secure: false, // true for 465, false for other ports
  auth: {
    user,
    pass,
  },
});

const sendEmail = async (content) => {
  const mailContent = {
    from,
    to,
    subject: `Learning Digest - ${getFormattedDate()}`, // Subject line
    html: content,
  };
  if (IS_PROD) {
    const info = await transporter.sendMail(mailContent);
    console.log("Email sent: %s", info.messageId);
  } else {
    console.log("Sending:");
    console.log(JSON.stringify(mailContent, 2, 2));
  }
};

module.exports = { sendEmail };
