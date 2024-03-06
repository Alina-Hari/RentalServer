const express = require("express");
const router = express.Router();
const Apartment = require("../models/Apartment.model");

router.get("/apartments", (req, res, next) => {

  Apartment.find({})
    .then(apartments => { res.json(apartments) })
    .catch(err => next(err))
});

router.get("/apartments/:apartmentId", (req, res, next) => {
  Apartment.findById(req.params.apartmentId)
    .then(apartment => { res.json(apartment) })
    .catch(err => next(err))
});

router.post("/apartments", (req, res, next) => {
  const { apartmentType, floor, price, area, isFurnished, isPetFriendly, country,city, availableDates, images } = req.body
  Apartment.create({ apartmentType, floor, price, area, isFurnished, isPetFriendly, country,city, availableDates, images })
    .then(apartment => { res.json(apartment) })
    .catch(err => next(err))
});

// for agent => add middleware fun

router.put("/apartments/:apartmentId", (req, res, next) => {
  const { apartmentType, floor, price, area, isFurnished, isPetFriendly, country,city, availableDates, isAvailable, images } = req.body
  Apartment.findByIdAndUpdate(req.params.apartmentId, { apartmentType, floor, price, area, isFurnished, isPetFriendly, country,city, availableDates, isAvailable, images }, { new: true })
    .then(apartment => { res.json(apartment) })
    .catch(err => next(err))
});

router.delete("/apartments/:apartmentId", (req, res, next) => {

  Apartment.findByIdAndDelete(req.params.apartmentId)
    .then(res.status(204).send())
    .catch(err => next(err))
});


// for user => finish editing logic for booking rha apartment

router.put("/apartments/:apartmentId", (req, res, next) => {
  const { datesBooked, usersBooked, availableDates } = req.body
  Apartment.findByIdAndUpdate(req.params.apartmentId, { datesBooked, usersBooked }, { new: true })
    .then(apartment => { res.json(apartment) })
    .catch(err => next(err))
});

// apartments in a specific city

router.get("/apartments/location/:locationName", (req, res, next) => {
  const { locationName } = req.params;
  Apartment.find({ location: locationName })
    .then(apartments => { res.json(apartments) })
    .catch(err => next(err))
});



router.get("/apartments/:userId", (req, res, next) => {
  Apartment.find({ usersBooked: req.params.userId }) // check an array
    .then(apartments => { res.json(apartments) })
    .catch(err => next(err))
});

module.exports = router;



// get /apartments X
// get /apartments/:apartmentId X
// post /apartments X
// put /apartments/:apartmentId  -- 
// delete /apartments/:apartmentId X


// get appartments/location/ X
// 

// get /appartments/user/ --
