const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "DevTo11@0118",
  database: "bookproject",
});

connection.connect(function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Conexion Correct. ");
  }
});

module.exports = connection;