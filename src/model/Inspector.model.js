const mongoose = require("mongoose");
const inspectorSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
  },
  mobile: {
    type: String,
    required: true,
  },
 
});

const Inspector = mongoose.model("inspector", inspectorSchema);
module.exports = Inspector;