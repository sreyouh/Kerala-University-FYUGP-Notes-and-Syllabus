import { createClient } from '@supabase/supabase-js';
import { IncomingForm } from 'formidable';
import fs from 'fs';

export const config = {
  api: { bodyParser: false }
};

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const form = new IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: 'File parse failed.' });

    const name = fields.name?.[0] || fields.name;
    const subject = fields.subject?.[0] || fields.subject;
    const semester = fields.semester?.[0] || fields.semester || '';
    const file = files.file?.[0] || files.file;

    if (!name || !subject || !file) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }

    // Read the file from temp disk
    const fileBuffer = fs.readFileSync(file.filepath);
    const fileName = `${Date.now()}_${file.originalFilename}`;

    // Upload file to Supabase Storage
    const { error: storageError } = await supabase.storage
      .from('notes-uploads')
      .upload(fileName, fileBuffer, {
        contentType: file.mimetype,
        upsert: false
      });

    if (storageError) {
      return res.status(500).json({ error: 'Storage upload failed.' });
    }

    // Get the public URL
    const { data: urlData } = supabase.storage
      .from('notes-uploads')
      .getPublicUrl(fileName);

    // Save record to database
    const { error: dbError } = await supabase
      .from('contributions')
      .insert([{
        contributor_name: name,
        subject: subject,
        semester: semester,
        file_url: urlData.publicUrl,
        status: 'pending'
      }]);

    if (dbError) {
      return res.status(500).json({ error: 'Database insert failed.' });
    }

    return res.status(200).json({ success: true });
  });
            }
