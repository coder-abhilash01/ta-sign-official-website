export default async function handler(req, res) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Unauthorized: Missing Token" });
  }

  try {
    const response = await fetch("https://api.mail.tm/messages", {
      headers: { Authorization: authHeader },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch inbox" });
    }

    const data = await response.json();
    return res.status(200).json(data["hydra:member"] || []);
  } catch (error) {
    return res.status(500).json({ error: "Server error fetching messages" });
  }
}