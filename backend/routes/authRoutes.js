const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserModel = require("../model/UserModel");

/* =========================
   ✅ SIGNUP
========================= */
router.post("/signup", async (req, res) => {
  try {
    // ✅ FIX: prevent crash if req.body is undefined
    const { name, email, password } = req.body || {};

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const exists = await UserModel.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      name,
      email,
      password: hashed,
    });

    return res.status(201).json({
      message: "Signup successful ✅",
      userId: user._id,
    });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({ message: "Signup failed" });
  }
});

/* =========================
   ✅ LOGIN
========================= */
router.post("/login", async (req, res) => {
  try {
    // ✅ FIX: prevent crash if req.body is undefined
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({ message: "Email & password required" });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
      return res.status(400).json({ message: "Wrong password" });
    }

    // ✅ FIX: JWT_SECRET check (very important)
    if (!process.env.JWT_SECRET) {
      return res.status(500).json({ message: "JWT_SECRET missing in .env" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.json({
      message: "Login successful ✅",
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Login failed" });
  }
});

module.exports = router;
