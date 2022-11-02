const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  holderName: { type: String, required: true },
  cardNo: { type: String, required: true },
  expireDate: { type: String, required: true },
  cvc: { type: String, required: true },
  amount: { type: String, required: true },
});

const Payment = mongoose.model("payment", PaymentSchema);
module.exports = Payment;