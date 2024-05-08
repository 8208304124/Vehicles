const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    max: 256,
  },
  lastName: {
    type: String,
    required: true,
    max: 256,
  },
  now:{
    type: String,
    required :true
  },
  typeOfVehicle:{
    type: String,
    required: true
  },
  model:{
    type: String,
    required: true
  },
  dateFrom:{
    type: String,
    required: true
  },
  dateTo:{
    type: String,
    required: true
  }
});
module.exports = mongoose.model("user", userschema);
