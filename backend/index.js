require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParse = require("body-parser");
const cors = require("cors");
const { HoldingModel } = require("./model/HoldingModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModels");
const PORT = process.env.PORT || 3002;
const URI = process.env.MONGO_URL;

const app = express();
app.use(cors());
app.use(bodyParse.json());

app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingModel.find({});
    res.status(200).json(allHoldings);
  } catch (error) {
    console.log("Error fetching holdings: ", eror);
    res.status(500).json({ message: "Failed to fetch holdings" });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const allPositons = await PositionsModel.find({});
    res.status(200).json(allPositons);
  } catch (error) {
    console.log("Error fetching  poistions: ", error);
    res.status(500).json({ message: "Failed to fetch positions" });
  }
});

// app.post("/newOrder", async (req, res) => {
//   try {
//     let newOrders = new OrdersModel({
//       name: req.body.name,
//       qty: req.body.qty,
//       price: req.body.price,
//       mode: req.body.mode,
//     });

//     await newOrders.save();
//     res.status(201).send("Order Successfully Saved");
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Failed to save order");
//   }
// });

// app.listen(PORT, async () => {
//   console.log("App Start");

//   try {
//     await mongoose.connect(URI);
//     console.log("MONGODB CONNECTED ✅");
//   } catch (err) {
//     console.error("DB connection failed ❌", err);
//   }
// });
app.post("/newOrder", async (req, res) => {
  const { name, qty, price, mode } = req.body;

  try {
    // Save order
    let newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    // Find holding
    let holding = await HoldingModel.findOne({ name });

    // BUY logic
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

    // SELL logic
    if (mode === "SELL") {
      if (holding) {
        holding.qty -= qty;

        if (holding.qty <= 0) {
          await HoldingModel.deleteOne({ name });
        } else {
          await holding.save();
        }
      }
    }

    res.status(201).json({ message: "Order executed successfully" });
  } catch (err) {
    console.error("Order error:", err);
    res.status(500).json({ message: "Order failed" });
  }
});

app.listen(process.env.PORT, async () => {
  console.log("App Start");

  try {
    await mongoose.connect(URI);
    console.log("MONGODB CONNECTED ✅");
  } catch (err) {
    console.error("DB connection failed ❌", err);
  }
});
