const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
 
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized - Admin login required",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized - Session expired or invalid token",
    });
  }
};

module.exports = authMiddleware;