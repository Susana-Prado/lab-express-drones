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

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
