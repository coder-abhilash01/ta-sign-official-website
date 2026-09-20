require("dotenv").config();
const app = require("./src/app"); // src folder se import karna zaroori hai
const connectDB = require("./src/db/db");

connectDB()
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});