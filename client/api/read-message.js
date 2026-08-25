export default async function handler(req, res) {
  const { id } = req.query;
  const authHeader = req.headers.authorization;

  if (!id || !authHeader) {
    return res.status(400).json({ error: "Missing message ID or token" });
  }

  try {
    const response = await fetch(`https://api.mail.tm/messages/${id}`, {
      headers: { Authorization: authHeader },
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Unable to read email" });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Server error reading message" });
  }
}