// lib/contactService.js

import nodemailer from 'nodemailer'

export async function sendContactFormEmail({ firstName, lastName, email, subject, message }) {
  console.log('📨 sendContactFormEmail()', { firstName, lastName, email, subject })
  
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS, // Gmail App Password
    },
  })

  const mailOptions = {
    from: `"${firstName} ${lastName}" <${process.env.GMAIL_USER}>`, // Must be your verified Gmail
    replyTo: email,
    to: process.env.GMAIL_USER,
    subject: `New Contact: ${subject}`,
    text: message,
    html: `
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  }

  const info = await transporter.sendMail(mailOptions)
  console.log('✅ Nodemailer info:', info)
  return info
}
