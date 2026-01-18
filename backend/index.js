require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3002;
const URI = process.env.MONGO_URL;

app.listen(PORT, async () => {
  console.log("App Start");

  try {
    await mongoose.connect(URI);
    console.log("MONGODB CONNECTED ✅");
  } catch (err) {
    console.error("DB connection failed ❌", err);
  }
});
