
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { HoldingModel } = require("./model/HoldingModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModels");

const authRoute = require("./Routes/AuthRoute");

const PORT = process.env.PORT || 3002;
const URI = process.env.MONGO_URL;

const app = express();

// ---- Middlewares ----
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"], 
    credentials: true,
  }),
);
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.json());

// ---- Auth Routes ----
app.use("/auth", authRoute);

// ---- Holdings ----
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingModel.find({});
    res.status(200).json(allHoldings);
  } catch {
    res.status(500).json({ message: "Failed to fetch holdings" });
  }
});

// ---- Positions ----
app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.status(200).json(allPositions);
  } catch {
    res.status(500).json({ message: "Failed to fetch positions" });
  }
});

// ---- Orders + Holdings Update ----
app.post("/newOrder", async (req, res) => {
  const { name, qty, price, mode } = req.body;

  try {
    await OrdersModel.create({ name, qty, price, mode });

    let holding = await HoldingModel.findOne({ name });

    if (mode === "BUY") {
      if (holding) {
        holding.qty += qty;
        holding.avg = price;
        holding.price = price;
        await holding.save();
      } else {
        await HoldingModel.create({
          name,
          qty,
          avg: price,
          price,
          net: "+0.00%",
          day: "+0.00%",
        });
      }
    }

    if (mode === "SELL" && holding) {
      holding.qty -= qty;
      if (holding.qty <= 0) {
        await HoldingModel.deleteOne({ name });
      } else {
        await holding.save();
      }
    }

    res.status(201).json({ message: "Order executed successfully" });
  } catch {
    res.status(500).json({ message: "Order failed" });
  }
});

// ---- Start Server ----
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

// ---- Connect DB ----
mongoose
  .connect(URI)
  .then(() => console.log("MONGODB CONNECTED ✅"))
  .catch((err) => console.error("DB connection failed ❌", err));
