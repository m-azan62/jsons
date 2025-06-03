// lib/mailService.js
import nodemailer from 'nodemailer';

export async function sendApplicationEmail(data) {
  const {
    firstName, lastName, email, phone, address,
    position, experience, availability, salary,
    coverLetter, resumeFilename
  } = data;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const message = {
    from: `"Career Portal" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: `New Job Application from ${firstName} ${lastName}`,
    html: `
      <h2>New Application Details</h2>
      <ul>
        <li><strong>Name:</strong> ${firstName} ${lastName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Address:</strong> ${address}</li>
        <li><strong>Position:</strong> ${position}</li>
        <li><strong>Experience:</strong> ${experience}</li>
        <li><strong>Availability:</strong> ${availability}</li>
        <li><strong>Salary:</strong> ${salary}</li>
        <li><strong>Resume File:</strong> ${resumeFilename}</li>
      </ul>
      <p><strong>Cover Letter:</strong><br/>${coverLetter}</p>
    `,
  };

  return transporter.sendMail(message);
}
