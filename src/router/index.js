const express = require("express");
const { getOne, getThree } = require("../controllers/1");
const {
  getUser,
  addUser,
  deleteUser,
  updateUser,
} = require("../controllers/users");

const route = express.Router();

route.get("/1", getOne);
route.get("/3", getThree);

route.get("/users", getUser);
route.post("/user", addUser);
route.delete("/user/:id", deleteUser);
route.patch("/user/:id", updateUser);

module.exports = route;
