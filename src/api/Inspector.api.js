const router = require("express").Router();
const inspectorController = require("../controller/Inspector.controller");

module.exports = function () {
  router.post("/", inspectorController.addInspector);
  router.get("/", inspectorController.getallInspectors);
  router.get("/:id", inspectorController.getoneInspector);
  router.put("/:id", inspectorController.updateInspector);
  router.delete("/:id", inspectorController.deleteInspector);

  return router;
};