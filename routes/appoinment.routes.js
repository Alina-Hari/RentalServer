const express = require("express");
const router = express.Router();
const Appoinment = require("../models/Appoinment.model");
//for agent
router.get("/appoinments", (req, res, next) => {

  Location.find({})
    .then(appoinments => { res.json(appoinments) })
    .catch(err => next(err))
});

router.get("/appoinments/:apartmentId", (req, res, next) => {
  const { apartmentId } = req.params;
  Location.find({ apartmentId })
    .then(appoinments => { res.json(appoinments) })
    .catch(err => next(err))
});

//for user
router.get("/appoinments/:userId", (req, res, next) => {
  const { userId } = req.params;
  Location.find({ userId })
    .then(appoinments => { res.json(appoinments) })
    .catch(err => next(err))
});


module.exports = router;