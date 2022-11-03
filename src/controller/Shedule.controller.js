const Shedule = require("../model/Shedule.model");
const express = require("express");
const mongoose = require("mongoose");

//Add New Shedule
const addShedule = async (req, res) => {
  if (req.body) {
    await Shedule(req.body)
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

//View All Shedules
const getallShedules = async (req, res) => {
  await Shedule.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//View particular Shedule
const getoneShedule = async (req, res) => {
  let sheduleID = req.params.id;
  await Shedule.findById(sheduleID)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//Update Shedule
const updateShedule = async (req, res) => {
  console.log(req.body);
  if (req.body) {
    let id = req.params.id;
    await Shedule.findByIdAndUpdate(id, req.body)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

//Delete Shedule
const deleteShedule = async (req, res) => {
  await Shedule.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).send({ status: "Deleted" });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  addShedule,
  getallShedules,
  getoneShedule,
  updateShedule,
  deleteShedule,
};
