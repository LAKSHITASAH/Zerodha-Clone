import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.options("*", cors());
app.use(express.json());

app.get("/", (req, res) => res.send("API running ✅"));
app.get("/allHoldings", (req, res) => res.json([]));

app.post("/orders", (req, res) => {
  res.json({ message: "Order received", data: req.body });
});

app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
