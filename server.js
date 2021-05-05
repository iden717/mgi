const express = require("express");
const router = require("./src/router/");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mgi_denny");
mongoose.Promise = global.Promise;

app.use(express.json());
app.use("/api", router);
const port = 5000;

app.listen(port, () => console.log(`Your server running in port ${port}`));
