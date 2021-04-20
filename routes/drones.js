const express = require('express');

const Drone = require('../models/Drone.model');

const router = express.Router();

router.get('/', (req, res, next) => {
  Drone.find({})
    
    .then(drones => {
      console.log(drones);
      res.render("drones/list", { drones })
    })
  .catch(error => console.error(error))
});

router.get('/create', (req, res, next) => {
  res.render("drones/create-form")
});

router.post('/create', (req, res, next) => {
  const { name, propellers, maxSpeed } = req.body;
  Drone.create( {name, propellers, maxSpeed})
    .then(() => {
    res.redirect("/drones")
    })
  .catch(error => console.error(error))
});

router.get('/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Drone.findById(id)
    .then((drone) => {
    res.render("drones/update-form", { drone });
  })
    .catch(error => console.error(error))
});

router.post('/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;
  Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed })
    .then(() => {
    res.redirect("/drones")
    })
  .catch(error => console.error(error))
});

router.post('/:id/delete', (req, res, next) => {
  const { id } = req.params;
  Drone.findByIdAndDelete(id)
    .then(() => {
    res.redirect("/drones")
    })
    .catch(error => console.error(error))
});

module.exports = router;
