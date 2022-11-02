const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const sheduleSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  routeNo: {
    type: String,
    required: true,
  },
  busNo: {
    type: String,
    required: true,
  },
  route: {
    type: String,
    required: true,
  },
 
  departureTime: {
    type: String,
    required: true,
  },
  arriveTime: {
    type: String,
    required: true,
  },
  driverName: {
    type: String,
    required: true,
  },
  inspector: {
    type: String,
    required: true,
  },
  busType: {
    type: String,
    required: true,
  },

});

const Shedule = mongoose.model("shedule", sheduleSchema);

module.exports = Shedule;