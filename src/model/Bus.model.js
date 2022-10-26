const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const busSchema = new Schema({
  busNo: {
    type: String,
    required: true,
  },
  route: {
    type: String,
    required: true,
  },
  routeNo: {
    type: String,
    required: true,
  },
  ownerName: {
    type: String,
    required: true,
  },
  driverName: {
    type: String,
    required: true,
  },

});

const Bus = mongoose.model("buses", busSchema);

module.exports = Bus;