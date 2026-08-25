export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // 1. Domain Fetch
    const domainRes = await fetch("https://api.mail.tm/domains");
    const domainData = await domainRes.json();
    const domain = domainData["hydra:member"]?.[0]?.domain;

    if (!domain) {
      return res.status(500).json({ error: "No domain available from Mail.tm" });
    }

    // 2. Generate Random User
    const randomStr = Math.random().toString(36).substring(2, 10);
    const address = `user_${randomStr}@${domain}`;
    const password = "Pass123!_user";

    // 3. Create Account
    const createRes = await fetch("https://api.mail.tm/accounts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ address, password }),
    });

    if (!createRes.ok) {
      const errData = await createRes.json();
      return res.status(createRes.status).json({ error: errData.message || "Failed to create mail account" });
    }

    // 4. Authenticate & Get Bearer Token
    const tokenRes = await fetch("https://api.mail.tm/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ address, password }),
    });

    const tokenData = await tokenRes.json();

    return res.status(200).json({
      address,
      token: tokenData.token,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || "Server error" });
  }
}