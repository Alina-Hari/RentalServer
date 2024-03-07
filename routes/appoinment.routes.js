const express = require("express");
const router = express.Router();
const Appoinment = require("../models/Appoinment.model");
//for agent
router.get("/appoinments", (req, res, next) => {

  Appoinment.find({})
    .then(appoinments => { res.json(appoinments) })
    .catch(err => next(err))
});

router.get("/appoinments/:apartmentId", (req, res, next) => {
  const { apartmentId } = req.params;
  Appoinment.find({ apartmentId })
    .then(appoinments => { res.json(appoinments) })
    .catch(err => next(err))
});

//for user
router.get("/appoinments/:userId", (req, res, next) => {
  const { userId } = req.params;
  Appoinment.find({ userId })
    .then(appoinments => { res.json(appoinments) })
    .catch(err => next(err))
});
router.post("/appoinments", (req, res, next) => {
 const { apartmentId, time , userBooked} = req.body;
  Appoinment.create({ apartmentId, time , userBooked})
    .then(appoinment => { res.json(appoinment) })
    .catch(err => next(err))
});


module.exports = router;