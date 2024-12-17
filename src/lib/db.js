import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "154.0.175.29",
  port: 3306,
  user: "bigrgtmi_api",
  password: "+27815644490",
  database: "bigrgtmi_power",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.on("error", (err) => {
  if (err) {
    console.log("Database pool error:", err);
  } else {
    console.log("database connected, ", "154.0.175.29");
  }
});

pool.on("connection", (stream) => {
  console.log("database connected, ", 3306);
});

export default pool;
