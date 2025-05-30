import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import prisma from '@/lib/prisma';

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  const uploadDir = path.join(process.cwd(), '/public/uploads');
  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

  const form = formidable({ uploadDir, keepExtensions: true });

  return new Promise((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return reject(new Response(JSON.stringify({ error: 'Parse error' }), { status: 400 }));
      }

      try {
        const resumePath = path.basename(files.resume.filepath);

        await prisma.application.create({
          data: {
            ...fields,
            agreeTerms: fields.agreeTerms === 'true',
            resume: resumePath,
          },
        });

        return resolve(new Response(JSON.stringify({ success: true }), { status: 200 }));
      } catch (error) {
        return reject(new Response(JSON.stringify({ error: 'DB Error' }), { status: 500 }));
      }
    });
  });
}
