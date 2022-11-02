const Bus = require("../model/Bus.model");
const express = require("express");
const mongoose = require("mongoose");

//Add New bus
// const addBus = async (req, res) => {
//   if (req.body) {
//     await Bus(req.body)
//       .save()
//       .then((data) => {
//         res.status(200).send({ data: data });
//       })
//       .catch((err) => {
//         res.status(500).send(err);
//       });
//   }
// };


const addBus = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    const bus = await Bus.findOne({ busNo: req.body.busNo });
    if (bus) {
      return res.status(409).send({ message: "Bus already registered" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.Password, salt);

    await new Bus({ ...req.body, Password: hashedPassword }).save();
    res.status(201).send({ message: "Bus added successfully" });

  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};


//View All Buss
const getallBuses = async (req, res) => {
  await Bus.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//View particular Bus
const getoneBus = async (req, res) => {
  let busID = req.params.id;
  await Bus.findById(busID)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//Update Bus
const updateBus = async (req, res) => {
  console.log(req.body);
  if (req.body) {
    let id = req.params.id;
    await Bus.findByIdAndUpdate(id, req.body)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

//Delete Bus
const deleteBus = async (req, res) => {
  await Bus.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).send({ status: "Deleted" });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  addBus,
  getallBuses,
  getoneBus,
  updateBus,
  deleteBus,
};
