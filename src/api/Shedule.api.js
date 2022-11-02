const router = require("express").Router();
const sheduleController = require("../controller/Shedule.controller");

module.exports = function () {
  router.post("/", sheduleController.addShedule);
  router.get("/", sheduleController.getallShedules);
  router.get("/:id", sheduleController.getoneShedule);
  router.put("/:id", sheduleController.updateShedule);
  router.delete("/:id", sheduleController.deleteShedule);

  return router;
};