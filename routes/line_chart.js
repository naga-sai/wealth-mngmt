const express = require("express");
const Router = express.Router();

Router.get("/getAllLineChartData", async function(req, res) {
    res.send({ data: [10,20,30,40] });
  });