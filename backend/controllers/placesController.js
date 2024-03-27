const bootcamp = require("../models/places");

//@desc         Get all places
//@route        GET /api/v1/places
//@access       private

exports.getPlaces = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Get all places" });
};

//@desc         Create all places
//@route        POST /api/v1/places
//@access       private
exports.createPlaces = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create all places" });
};

//@desc         Update places with id
//@route        PUT /api/v1/places
//@access       private
exports.updatePlace = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: "Update all places with id " + req.params.id });
};

//@desc         Delete place
//@route        Delete /api/v1/places
//@access       private
exports.deletePlace = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Delete all places" });
};
