import { kv } from "@vercel/kv";

async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "Project id required" });
  }

  try {
    const views = await kv.incr(`rizorsweb:project:${id}`);
    res.status(200).json({ views });
  } catch {
    res.status(500).json({ error: "Failed to update views" });
  }
}

export default handler