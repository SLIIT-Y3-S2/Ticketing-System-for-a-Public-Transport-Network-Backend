const Inspector = require("../model/Inspector.model");
const express = require("express");
const mongoose = require("mongoose");

//Add New Inspector
const addInspector = async (req, res) => {
  if (req.body) {
    await Inspector(req.body)
      .save()
      .then((data) => {
        res.status(200).send({ data: data });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

//View All Inspectors
const getallInspectors = async (req, res) => {
  await Inspector.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//View particular Inspector
const getoneInspector = async (req, res) => {
  let InspectorID = req.params.id;
  await Inspector.findById(InspectorID)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//Update Inspector
const updateInspector = async (req, res) => {
  console.log(req.body);
  if (req.body) {
    let id = req.params.id;
    await Inspector.findByIdAndUpdate(id, req.body)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
};

//Delete Inspector
const deleteInspector = async (req, res) => {
  await Inspector.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).send({ status: "Deleted" });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  addInspector,
  getallInspectors,
  getoneInspector,
  updateInspector,
  deleteInspector,
};
