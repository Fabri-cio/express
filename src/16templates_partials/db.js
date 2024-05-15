// 19 base de datos
const mysql = require("mysql2/promise");

async function connectDB() {
  const connection = await mysql.createConnection({
    host: "bdyik9ojodv4dduwvezz-mysql.services.clever-cloud.com",
    user: "utc0ufvmob8av1qu",
    password: "bh3naCYbWWdc3FKbyLmT",
    database: "bdyik9ojodv4dduwvezz",
    // ssl: {
    //   rejectUnauthorized: false,
    // }, //por si no deja conectarme
  });

  const result = await connection.query("SELECT 'hola mundo' AS Result");
  console.log(result);
}

module.exports = connectDB;
