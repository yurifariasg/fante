import { getFormattedDate } from './../utils'
import nodemailer from 'nodemailer'

const { MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS, MAIL_FROM, MAIL_TO } =
  process.env

const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: Number.parseInt(MAIL_PORT!),
  secure: false, // true for 465, false for other ports
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS,
  },
})

export const sendEmail = async (content: string) => {
  const mailContent = {
    from: MAIL_FROM,
    to: MAIL_TO,
    subject: `Learning Digest - ${getFormattedDate()}`,
    html: content,
  }

  const info = await transporter.sendMail(mailContent)
  console.log('Email sent: %s', info.messageId)
}
