const express = require("express");
require("dotenv").config();
const cors = require("cors");
const router = require("./routes/routes");
const { errorHandler } = require("./middlewares/errorMiddleware");
const mongoConn = require("./database/mongoConn");

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

app.use(errorHandler);

mongoConn();

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
