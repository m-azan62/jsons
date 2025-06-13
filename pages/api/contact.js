// app/pages/api/contact.js

import { sendContactFormEmail } from '@/lib/contactService'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { firstName, lastName, email, subject, message } = req.body

  if (!firstName || !lastName || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  try {
    await sendContactFormEmail({ firstName, lastName, email, subject, message })
    console.log('✅ Email sent successfully.')
    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('❌ Email failed:', error)
    return res.status(500).json({ error: 'Failed to send message' })
  }
}
