const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

const Drone = require("../models/Drone.model");
const mongoose = require("mongoose");
const DB_NAME = "drone-app";

mongoose
  .connect(`mongodb://localhost/${DB_NAME}`)
  .then(() => {
    console.log("Connected to database");

    Drone.insertMany(drones).then((drones) => {
      console.log(`${drones.length} inserted.`);

      mongoose.disconnect().then(() => console.log("Disconnected succesfully"));
    });
  })
  .catch((error) => console.error(error));
