const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  education: { type: String, required: true },
});

module.exports = mongoose.model("Data", DataSchema);
