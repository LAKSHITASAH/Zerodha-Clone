require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const HoldingModel = require("./model/HoldingModel");
const PositionModel = require("./model/PositionModel");
const OrdersModel = require("./model/OrdersModel");

const authRoutes = require("./routes/authRoutes");

const app = express();

// =========================
// MIDDLEWARE
// =========================

// CORS: Allow your deployed frontends to call this backend
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",
      "http://localhost:5174",
      // After deploying, add your Vercel URLs here:
      // "https://your-frontend.vercel.app",
      // "https://your-dashboard.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());

// =========================
// ROUTES
// =========================
app.use("/auth", authRoutes);

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// =========================
// HOLDINGS ROUTES
// =========================
app.get("/addHoldings", async (req, res) => {
  try {
    const tempHoldings = [
      { name: "BHARTIARTL", qty: 2, avg: 538.05, price: 541.15, net: "+0.58%", day: "+2.99%", isLoss: false },
      { name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%", isLoss: false },
      { name: "HINDUNILVR", qty: 1, avg: 2335.85, price: 2417.4, net: "+3.49%", day: "-0.35%", isLoss: false },
      { name: "INFY", qty: 1, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "+1.20%", isLoss: false },
      { name: "ITC", qty: 5, avg: 202.0, price: 207.9, net: "+2.92%", day: "+0.80%", isLoss: false },
      { name: "KPITTECH", qty: 12, avg: 250.3, price: 266.45, net: "+6.45%", day: "+3.54%", isLoss: false },
      { name: "M&M", qty: 7, avg: 809.9, price: 779.8, net: "-3.72%", day: "-0.01%", isLoss: true },
      { name: "RELIANCE", qty: 9, avg: 2193.7, price: 2112.4, net: "-3.71%", day: "+1.44%", isLoss: true },
      { name: "SBIN", qty: 25, avg: 324.35, price: 430.2, net: "+32.63%", day: "-0.34%", isLoss: false },
      { name: "TATAPOWER", qty: 30, avg: 104.2, price: 124.15, net: "+19.15%", day: "+0.21%", isLoss: false },
      { name: "TCS", qty: 4, avg: 3041.7, price: 3194.8, net: "+5.03%", day: "-0.25%", isLoss: false },
      { name: "WIPRO", qty: 18, avg: 489.3, price: 577.75, net: "+18.08%", day: "+0.32%", isLoss: false },
      { name: "SGBMAY29", qty: 2, avg: 4727.0, price: 4719.0, net: "-0.17%", day: "+0.15%", isLoss: true },
    ];

    await HoldingModel.deleteMany({});
    await HoldingModel.insertMany(tempHoldings);

    res.json({ message: "✅ Holdings seeded successfully", count: tempHoldings.length });
  } catch (err) {
    console.error("❌ Error inserting holdings:", err);
    res.status(500).json({ error: "Error seeding holdings" });
  }
});

app.get("/allHoldings", async (req, res) => {
  try {
    const holdings = await HoldingModel.find({});
    res.json(holdings);
  } catch (err) {
    console.error("❌ Error fetching holdings:", err);
    res.status(500).json({ error: "Failed to fetch holdings" });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const positions = await PositionModel.find({});
    res.json(positions);
  } catch (err) {
    console.error("❌ Error fetching positions:", err);
    res.status(500).json({ error: "Failed to fetch positions" });
  }
});

// =========================
// ORDER ROUTE
// =========================
app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.json({ message: "✅ Order saved!" });
  } catch (err) {
    console.error("Order save error:", err);
    res.status(500).json({ message: "Order failed" });
  }
});

// =========================
// START SERVER + CONNECT DB
// =========================
const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URL;

if (!uri) {
  console.error("❌ MONGO_URL is missing. Add it in your .env locally and in Render env vars.");
}

mongoose
  .connect(uri)
  .then(() => console.log("✅ DB connected!"))
  .catch((err) => console.error("❌ DB connection error:", err.message));

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
