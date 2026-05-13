import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, subject, semester, fileUrl } = req.body;

  const { error } = await supabase
    .from('contributions')
    .insert([{ contributor_name: name, subject, semester, file_url: fileUrl }]);

  if (error) return res.status(500).json({ error: error.message });
  return res.status(200).json({ success: true });
}
