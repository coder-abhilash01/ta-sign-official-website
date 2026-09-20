const axios = require("axios");

// Mail.tm Proxy Logic
const proxyMailRequest = async (req, res) => {
  try {
    const endpoint = req.params.splat || "";
    const targetUrl = `https://api.mail.tm/${endpoint}`;

    const headers = {
      "Content-Type": "application/json",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    };

    if (req.headers.authorization) {
      headers["Authorization"] = req.headers.authorization;
    }

    const response = await axios({
      method: req.method,
      url: targetUrl,
      data: req.body,
      headers: headers,
    });

    return res.status(response.status).json(response.data);
  } catch (error) {
    const status = error.response?.status || 500;
    const data = error.response?.data || {
      error: "Proxy Request Failed",
      message: error.message,
    };
    return res.status(status).json(data);
  }
};


module.exports = proxyMailRequest;