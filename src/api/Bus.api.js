const router = require("express").Router();
const busController = require("../controller/Bus.controller");

module.exports = function () {
  router.post("/", busController.addBus);
  router.get("/", busController.getallBuses);
  router.get("/:id", busController.getoneBus);
  router.put("/:id", busController.updateBus);
  router.delete("/:id", busController.deleteBus);

  return router;
};
