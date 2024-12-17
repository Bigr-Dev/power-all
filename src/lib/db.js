import { createPool } from "mysql2/promise";

const pool = createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
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
