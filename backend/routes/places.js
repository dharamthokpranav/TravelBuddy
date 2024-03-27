const express = require("express");
const {
  getPlaces,
  createPlaces,
  deletePlace,
  updatePlace,
} = require("../controllers/placesController");
const router = express.Router();

router.route("/").get(getPlaces).post(createPlaces);
router.route("/:id").put(updatePlace).delete(deletePlace);

module.exports = router;
