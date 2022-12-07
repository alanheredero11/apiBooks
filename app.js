const express = require("express");
const cors = require("cors");

//Routers
// const studentRoutes = require("./routers/student.router");



const errorHandling = require("./error/errorHandling");

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routers

// app.use(studentRoutes);



app.use(function (req, res, next) {
  res.status(404).json({
    error: true,
    codigo: 404,
    message: "Endpoint doesnt fount",
  });
});

module.exports = app;
