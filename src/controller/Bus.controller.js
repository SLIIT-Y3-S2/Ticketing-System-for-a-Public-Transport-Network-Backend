const Bus = require("../model/Bus.model");
const express = require("express");
const mongoose = require("mongoose");

//Add New bus
const addBus = async (req, res) => {
  if (req.body) {
    await Bus(req.body)
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
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
