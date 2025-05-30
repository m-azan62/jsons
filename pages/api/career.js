import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import prisma from '@/lib/prisma';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const uploadDir = path.join(process.cwd(), '/public/uploads');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const form = formidable({
    uploadDir,
    keepExtensions: true,
    maxFileSize: 25 * 1024 * 1024,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('❌ Form parse error:', err);
      return res.status(400).json({ error: 'Form parsing failed' });
    }

    try {
      // Get uploaded file
      const fileKeys = Object.keys(files);
      if (fileKeys.length === 0) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const uploadedFile = files[fileKeys[0]];
      const filePath = uploadedFile?.filepath || uploadedFile?.[0]?.filepath;
      if (!filePath) {
        return res.status(400).json({ error: 'File upload failed' });
      }

      // Normalize fields
      const firstName = fields.firstName?.toString().trim() || 'unnamed';
      const email = fields.email?.toString().trim().toLowerCase();

      const safeFields = {
        firstName,
        lastName: fields.lastName?.toString() || '',
        email,
        phone: fields.phone?.toString() || '',
        address: fields.address?.toString() || '',
        position: fields.position?.toString() || '',
        experience: fields.experience?.toString() || '',
        availability: fields.availability?.toString() || '',
        salary: fields.salary?.toString() || '',
        coverLetter: fields.coverLetter?.toString() || '',
        agreeTerms: fields.agreeTerms === 'true',
      };

      // Delete previous application if exists
      const existing = await prisma.application.findFirst({ where: { email } });

      if (existing) {
        const oldResume = path.join(uploadDir, existing.resume);
        if (fs.existsSync(oldResume)) {
          fs.unlinkSync(oldResume); // Delete previous resume file
        }

        await prisma.application.delete({ where: { id: existing.id } }); // Delete record
      }

      // Generate new filename
      const shortId = crypto.randomBytes(3).toString('hex');
      const ext = path.extname(filePath);
      const cleanName = firstName.replace(/\s+/g, '_').toLowerCase();
      const newFileName = `${cleanName}_${shortId}_resume${ext}`;
      const newFilePath = path.join(uploadDir, newFileName);
      fs.renameSync(filePath, newFilePath);

      // Save new application
      await prisma.application.create({
        data: {
          ...safeFields,
          resume: newFileName,
        },
      });

      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('❌ DB error:', error);
      return res.status(500).json({ error: 'Server error' });
    }
  });
}
