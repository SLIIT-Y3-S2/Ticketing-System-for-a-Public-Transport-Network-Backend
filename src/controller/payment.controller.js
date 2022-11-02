const Payment = require("../model/payment.model");

const addPayment = async (req, res) => {
  if (req.body) {
    const payment = new Payment(req.body);
    await payment
      .save()
      .then((data) => res.status(200).send({ data: data }))
      .catch((err) => res.status(200).send(err));
  }
};


module.exports = {
  addPayment,
  
};