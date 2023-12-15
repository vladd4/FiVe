import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "express-async-errors";

import * as CarController from "./controllers/CarController.js";
import * as FilterController from "./controllers/FilterContoller.js";

const app = express();

//middleware
dotenv.config();
app.use(express.json());
app.use(cors());
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send("Something went wrong. Try again later!");
});

const start = async () => {
  try {
    app.listen(process.env.SERVER_PORT, () =>
      console.log(`Server is started on port ${process.env.SERVER_PORT}!`)
    );
  } catch (error) {
    console.log(error);
  }
};

//cars
app.get("/cars", async (req, res) => {
  const cars = await CarController.getCars();
  res.json(cars);
});
app.post("/cars", async (req, res) => {
  const filteredCars = await CarController.filterCars(req.body);
  res.json(filteredCars);
});

//filters
app.get("/filters/brands", async (req, res) => {
  const brands = await FilterController.getBrands();
  res.json(brands);
});
app.get("/filters/models", async (req, res) => {
  const models = await FilterController.getModels(req.query.brand);
  res.json(models);
});
app.get("/filters/fuel", async (req, res) => {
  const fuels = await FilterController.getFuel();
  res.json(fuels);
});
app.get("/filters/gear", async (req, res) => {
  const gears = await FilterController.getGear();
  res.json(gears);
});
app.get("/filters/transmission", async (req, res) => {
  const transmissions = await FilterController.getTransmission();
  res.json(transmissions);
});
app.get("/filters/state", async (req, res) => {
  const states = await FilterController.getState();
  res.json(states);
});

//user
app.get("/user/:id", async (req, res) => {
  const user = await UserController.getUserById(req.params.id);
  res.json(user);
});
app.post("/user/edit/:id", async (req, res) => {
  const updatedUser = await UserController.updateUserById(
    req.body,
    req.params.id
  );
  res.json(updatedUser);
});

//saved
app.get("/saved/:id", async (req, res) => {
  const saved = await SavedController.getSavedByUserId(req.params.id);
  res.json(saved);
});
app.post("/saved", async (req, res) => {
  const added = await SavedController.addSaved(req.body);
  res.status(201).json(added);
});
app.delete("/saved/:id", async (req, res) => {
  const deleted = await SavedController.deleteSavedbyId(req.params.id);
  res.json(deleted);
});

//start server
start();
