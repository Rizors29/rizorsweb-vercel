import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  try {
    const views = await kv.incr('rizorsweb:views');
    res.status(200).json({ views });
  } catch (error) {
    console.error('KV ERROR:', error);
    res.status(500).json({ error: 'Failed to update views' });
  }
}
