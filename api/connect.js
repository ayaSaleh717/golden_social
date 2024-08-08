import mysql from "mysql2"

export const db = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "0000",
  database: "social"
})

db.connect(err => {
  if (!err) {
    console.log("DB Connection Succeeded");
  } else {
    console.log("DB Connection Failed");
  }
});
