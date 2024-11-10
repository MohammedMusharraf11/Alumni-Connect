const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  description: { type: String, required: true },
  link: { type: String, required: true },
  dateTime: { type: Date, required: true },
  category: { type: String, required: true },
});

module.exports = mongoose.model("Event", eventSchema);
