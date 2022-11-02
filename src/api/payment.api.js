const express = require("express");
const router = express.Router();
const PaymentController = require("../controller/payment.controller");

module.exports = function () {
  router.post("/", PaymentController.addPayment);
 
  return router;
};