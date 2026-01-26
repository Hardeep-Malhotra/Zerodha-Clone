const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); // ✅ ONLY ONCE

// ================= SIGNUP =================
module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const user = await User.create({
      email,
      password,
      username,
    });

    const token = createSecretToken(user._id);

    res.status(201).json({
      message: "User signed up successfully",
      success: true,
      token,
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
};

// ================= LOGIN =================
module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    const token = createSecretToken(user._id);

    res.status(200).json({
      message: "User logged in successfully",
      success: true,
      token,
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Login failed" });
  }
};

// ================= VERIFY TOKEN =================
module.exports.userVerification = (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.json({ success: false });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return res.json({ success: true });
  } catch (err) {
    return res.json({ success: false });
  }
};
