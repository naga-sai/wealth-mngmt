const express = require("express");
const app = express();
const cors = require("cors");

const routes_line_chart = require("./routes/line_chart");
const routes_pie_chart = require("./routes/pie_chart");

app.use(cors());

app.use("/api/line_chart", routes_line_chart);

app.use("/api/pie_chart", routes_pie_chart);