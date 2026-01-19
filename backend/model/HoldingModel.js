const mongoose = require("mongoose");

const { HoldingSchema } = require("../Schema/HoldingSchema.js");

const HoldingModel = mongoose.model("holding", HoldingSchema);

module.exports = { HoldingModel };
