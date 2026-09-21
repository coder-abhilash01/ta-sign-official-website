const express = require("express");
const cors = require("cors");
const mailRoutes = require("./routes/mailRoutes");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const adminHeroRoutes = require("./routes/admin/HeroRoutes");
const adminBlogRoutes = require("./routes/admin/BlogRoutes");
const adminUtilityRoutes =  require("./routes/admin/utilityRoutes");
const adminPopupRoutes = require("./routes/admin/popupRoutes")
const blogRoutes = require("./routes/public/blogsRoutes");
const heroRoutes = require("./routes/public/heroRoutes");
const popupRoutes = require("./routes/public/popupRoutes")
const utilityRoutes = require("./routes/public/utilityRoutes");
const app = express();

app.use(cors({ origin: ["http://localhost:5173","http://localhost:5174",  "https://tasign.in",
      "https://www.tasign.in",],
  credentials: true
 }));
app.use(express.json());
app.use(cookieParser());
app.use("/api/mail", mailRoutes);

app.use("/api/auth", authRoutes);
app.use("/api/content/hero", adminHeroRoutes);
app.use("/api/blogs", adminBlogRoutes);
app.use("/api/utilities", adminUtilityRoutes)
app.use("/api/popup", adminPopupRoutes);

// Public routes
app.use("/api/public/hero",heroRoutes);
app.use("/api/public/blogs", blogRoutes);
app.use("/api/public/utilities", utilityRoutes);
app.use("/api/public/popup", popupRoutes);

module.exports = app;