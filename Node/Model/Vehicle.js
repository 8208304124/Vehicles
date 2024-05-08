const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ["bike", "car"],
    required: true,
  },
});
// Ensure uniqueness on make, model, year, and type
VehicleSchema.index({ company: 1, model: 1, year: 1, type: 1 }, { unique: true });
module.exports = mongoose.model("Vehicles", VehicleSchema);
