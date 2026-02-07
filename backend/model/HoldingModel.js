const mongoose = require("mongoose");
const HoldingSchema = require("../schemas/HoldingSchema");

module.exports = mongoose.model("Holding", HoldingSchema);
