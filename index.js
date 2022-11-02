const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const connectDB = require("./src/config/config");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.get("/", (req, res) => {
  res.json("Hello Node!");
});

const busAPI = require("./src/api/Bus.api");
app.use("/bus", busAPI());

const sheduleAPI = require("./src/api/Shedule.api");
app.use("/shedule", sheduleAPI());
const paymentApi = require("./src/api/payment.api");
app.use("/payment", paymentApi());
app.use("/users", require("./src/controller/user.controller"));

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});


