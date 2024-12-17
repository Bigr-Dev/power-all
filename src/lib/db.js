import { createPool } from "mysql2/promise";

const pool = createPool({
  host: process.env.DB_HOST || "154.0.175.29",
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || "bigrgtmi_api",
  password: process.env.DB_PASSWORD || "+27815644490",
  database: process.env.DB_DATABASE || "bigrgtmi_power",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.on("error", (err) => {
  if (err) {
    console.log("Database pool error:", err);
  } else {
    console.log("database connected, ", process.env.HOST);
  }
});

pool.on("connection", (stream) => {
  console.log("database connected, ", process.env.DB_PORT);
});

export default pool;
