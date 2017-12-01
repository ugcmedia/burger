// Set up MySQL connection.
const mysql = require("mysql");

const connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: '',
  database: "burger"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
