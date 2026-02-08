import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "Project id required" });
  }

  try {
    if (req.method === "POST") {
      const views = await kv.incr(`rizorsweb:project:${id}`);
      return res.status(200).json({ views });
    }

    if (req.method === "GET") {
      const views = (await kv.get(`rizorsweb:project:${id}`)) ?? 0;
      return res.status(200).json({ views });
    }

    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end("Method Not Allowed");
  } catch (err) {
    res.status(500).json({ error: "Failed to process views" });
  }
}
