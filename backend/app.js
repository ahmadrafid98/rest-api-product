const express = require("express");
const WebResponse = require("./models/webResponse");
const getRoutes = require("./routes");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors({ origin: "http://localhost:4200" }));

app.use("/api/v1", getRoutes());

// error handler
app.use((error, req, res, next) => {
  const response = new WebResponse(500, "Bad Request", error);
  res.status(500).json(response);
});

// not found handler
app.use((req, res, next) => {
  const response = new WebResponse(404, "Not Found", "");
  res.status(404).json(response);
});

app.listen(port, () => {
  console.log(`sever listen at http://localhost:${port}`);
});
