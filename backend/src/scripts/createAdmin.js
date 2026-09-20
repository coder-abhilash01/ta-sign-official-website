require("dotenv").config();
const connectDB = require("../db/db"); // Dedicated DB Connection Config Re-use
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const createAdmin = async () => {
  try {
  
    await connectDB();

    const email = process.env.Email_ID;
    const rawPassword = process.env.RAW_PASSWORD;

    // 2. Check & Insert Logic
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("⚠️ Admin already exists!");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash(rawPassword, 10);
    await User.create({ email, password: hashedPassword });

    console.log("✅ Admin added successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
};

createAdmin();